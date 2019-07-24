import React, { createElement, Component } from 'react';
import { connect } from 'react-redux';
import { getResources } from 'react-admin';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import {
    translate,
    DashboardMenuItem,
    MenuItemLink,
    Responsive,
} from 'react-admin';
import SubMenu from './SubMenu';
import LabelIcon from '@material-ui/icons/Label';
import { withStyles } from '@material-ui/core/styles';
import { Tooltip, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";
import { WithPermissions } from 'ra-core';
import { Lock, HorizontalSplitOutlined, CheckCircleRounded, CategoryRounded, SupervisorAccountRounded, DetailsRounded, MessageRounded, SettingsRounded, ListAltRounded, PlaceRounded, MonetizationOnRounded, AttachMoneyOutlined, AddCircleRounded, ReportRounded, StraightenRounded, NewReleasesRounded, BuildRounded, FormatAlignRightRounded, BusinessRounded, PersonRounded, DashboardRounded, ScheduleRounded, ArchiveRounded, SettingsApplicationsRounded, DevicesRounded, TextFieldsRounded } from '@material-ui/icons';
const styles = {
    root: {}, // Style applied to the MenuItem from material-ui
    active: { color: 'black' }, // Style applied when the menu item is the active one
    icon: {}, // Style applied to the icon
};


class Menu extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        menuUsers: false,
        menuCompanies: false,
        menuSettings: false,
        publicSettings: false,
        menuDeals: false,
        menuCustomers: false,
        menuServices: false,
        menuDamages: false,
        menuEmergencies: false,
        menuFinancial: false,
    };

    static propTypes = {
        onMenuClick: PropTypes.func,
        logout: PropTypes.object,
    };

    handleToggle = menu => {
        this.setState(state => ({ [menu]: !state[menu] }));
        Object.keys(this.state).forEach((key, index) => {
            if (key !== menu) {
                this.setState(state => ({ [key]: false }));
            }

        });
    };

    hasPermisstion = (permissions, requirePermission) => {

        if (permissions !== null && permissions.superAdmin !== null && permissions.superAdmin === "1") {
            return true;
        }

        if (permissions !== null && permissions.permissions !== null) {
            let rPermissions = JSON.parse(permissions.permissions);
            let result = rPermissions.filter(function (perm) {

                if (perm == requirePermission) {
                    return perm;
                }
            });

            return result.length > 0 ? true : false;
        }

        return false;
    }

    hasInPermissions = (permissions, requirePermissions) => {

        if (permissions !== null && permissions.superAdmin !== null && permissions.superAdmin === "1") {
            return true;
        }

        if (permissions !== null && permissions.permissions !== null) {
            let rPermissions = JSON.parse(permissions.permissions);
            let found = false;
            rPermissions.forEach(perm => {
                requirePermissions.forEach(reqPerm => {
                    if (perm == reqPerm) {
                        found = true;
                        return;
                    }
                });
            });

            return found;
        }

        return false;
    }

    render() {
        const { onMenuClick, open, logout, translate } = this.props;

        return (
            <div>
                <WithPermissions
                    render={({ permissions }) => [

                        this.hasPermisstion(permissions, 'dashboard')
                            ? <DashboardMenuItem onClick={onMenuClick} />
                            : null,

                        this.hasPermisstion(permissions, 'companyDashboard')
                            ? <MenuItemLink
                                to={`/company-dashboard`}
                                primaryText={translate(`ra.menu.company_dashboard`)}
                                leftIcon={<DashboardRounded />}
                                onClick={onMenuClick}
                            />
                            : null,

                        this.hasPermisstion(permissions, 'schedules')
                            ? <MenuItemLink
                                to={`/schedules`}
                                primaryText={translate(`ra.menu.schedules`)}
                                leftIcon={<ScheduleRounded />}
                                onClick={onMenuClick}
                            />
                            : null,

                        this.hasInPermissions(permissions, ['users', 'roles'])
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuUsers')}
                                isOpen={this.state.menuUsers}
                                sidebarIsOpen={open}
                                name="ra.menu.users_mgmt"
                                icon={<PersonRounded />}
                            >

                                {
                                    this.hasPermisstion(permissions, 'users')
                                        ? <MenuItemLink
                                            to={`/users`}
                                            primaryText={translate(`ra.menu.users_list`)}
                                            leftIcon={<ListAltRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'users')
                                        ? <MenuItemLink
                                            to={`/users/create`}
                                            primaryText={translate(`ra.menu.add_user`)}
                                            leftIcon={<AddCircleRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'roles')
                                        ? <MenuItemLink
                                            to={`/roles`}
                                            primaryText={translate(`ra.menu.roles`)}
                                            leftIcon={<CheckCircleRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                            </SubMenu>
                            : null,

                        this.hasPermisstion(permissions, 'companies')
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuCompanies')}
                                isOpen={this.state.menuCompanies}
                                sidebarIsOpen={open}
                                name="ra.menu.companies_mgmt"
                                icon={<BusinessRounded />}
                            >
                                <MenuItemLink
                                    to={`/companies`}
                                    primaryText={translate(`ra.menu.companies_list`)}
                                    leftIcon={<ListAltRounded />}
                                    onClick={onMenuClick}
                                />
                                <MenuItemLink
                                    to={`/companies/create`}
                                    primaryText={translate(`ra.menu.add_company`)}
                                    leftIcon={<AddCircleRounded />}
                                    onClick={onMenuClick}
                                />
                            </SubMenu>
                            : null,

                        this.hasInPermissions(permissions, ['deals', 'dealsArchive'])
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuDeals')}
                                isOpen={this.state.menuDeals}
                                sidebarIsOpen={open}
                                name="ra.menu.deals_mgmt"
                                icon={<FormatAlignRightRounded />}
                            >

                                {
                                    this.hasPermisstion(permissions, 'deals')
                                        ? <MenuItemLink
                                            to={`/deals`}
                                            primaryText={translate(`ra.menu.deals_list`)}
                                            leftIcon={<ListAltRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'deals')
                                        ? <MenuItemLink
                                            to={`/deals/create`}
                                            primaryText={translate(`ra.menu.add_deal`)}
                                            leftIcon={<AddCircleRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'dealsArchive')
                                        ? <MenuItemLink
                                            to={`/deals/archive`}
                                            primaryText={translate(`ra.menu.deals_archive`)}
                                            leftIcon={<ArchiveRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                            </SubMenu>
                            : null,

                        this.hasInPermissions(permissions, ['customers'])
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuCustomers')}
                                isOpen={this.state.menuCustomers}
                                sidebarIsOpen={open}
                                name="ra.menu.customers_mgmt"
                                icon={<SupervisorAccountRounded />}
                            >

                                {
                                    this.hasPermisstion(permissions, 'customers')
                                        ? <MenuItemLink
                                            to={`/customers`}
                                            primaryText={translate(`ra.menu.customers_list`)}
                                            leftIcon={<ListAltRounded />}
                                            onClick={onMenuClick}
                                        />

                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'customers')
                                        ? <MenuItemLink
                                            to={`/customers/create`}
                                            primaryText={translate(`ra.menu.add_customer`)}
                                            leftIcon={<AddCircleRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                            </SubMenu>
                            : null,

                        this.hasPermisstion(permissions, 'services')
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuServices')}
                                isOpen={this.state.menuServices}
                                sidebarIsOpen={open}
                                name="ra.menu.services_mgmt"
                                icon={<BuildRounded />}
                            >
                                <MenuItemLink
                                    to={`/services`}
                                    primaryText={translate(`ra.menu.services_list`)}
                                    leftIcon={<ListAltRounded />}
                                    onClick={onMenuClick}
                                />
                                <MenuItemLink
                                    to={`/services/create`}
                                    primaryText={translate(`ra.menu.add_service`)}
                                    leftIcon={<AddCircleRounded />}
                                    onClick={onMenuClick}
                                />
                            </SubMenu>
                            : null,

                        this.hasPermisstion(permissions, 'damages')
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuDamages')}
                                isOpen={this.state.menuDamages}
                                sidebarIsOpen={open}
                                name="ra.menu.damages_mgmt"
                                icon={<ReportRounded />}
                            >
                                <MenuItemLink
                                    to={`/damages`}
                                    primaryText={translate(`ra.menu.damages_list`)}
                                    leftIcon={<ListAltRounded />}
                                    onClick={onMenuClick}
                                />
                                <MenuItemLink
                                    to={`/damages/create`}
                                    primaryText={translate(`ra.menu.add_damage`)}
                                    leftIcon={<AddCircleRounded />}
                                    onClick={onMenuClick}
                                />
                            </SubMenu>
                            : null,

                        this.hasPermisstion(permissions, 'emergencies')
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuEmergencies')}
                                isOpen={this.state.menuEmergencies}
                                sidebarIsOpen={open}
                                name="ra.menu.emergencies_mgmt"
                                icon={<NewReleasesRounded />}
                            >
                                <MenuItemLink
                                    to={`/emergencies`}
                                    primaryText={translate(`ra.menu.emergencies_list`)}
                                    leftIcon={<NewReleasesRounded />}
                                    onClick={onMenuClick}
                                />
                                <MenuItemLink
                                    to={`/emergencies/create`}
                                    primaryText={translate(`ra.menu.add_emergency`)}
                                    leftIcon={<AddCircleRounded />}
                                    onClick={onMenuClick}
                                />
                            </SubMenu>
                            : null,

                        this.hasPermisstion(permissions, 'financials')
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuFinancial')}
                                isOpen={this.state.menuFinancial}
                                sidebarIsOpen={open}
                                name="ra.menu.financials_mgmt"
                                icon={<AttachMoneyOutlined />}
                            >
                                <MenuItemLink
                                    to={`/financials`}
                                    primaryText={translate(`ra.menu.financials_list`)}
                                    leftIcon={<MonetizationOnRounded />}
                                    onClick={onMenuClick}
                                />
                            </SubMenu>
                            : null,

                        this.hasInPermissions(permissions, ['companyMessageTemplates', 'segments', 'dealPlaceholders',
                            'serviceUsers', 'password', 'units', 'checklists', 'checklistCategories', 'regions'])
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('menuSettings')}
                                isOpen={this.state.menuSettings}
                                sidebarIsOpen={open}
                                name="ra.menu.settings"
                                icon={<SettingsRounded />}
                            >

                                {
                                    this.hasPermisstion(permissions, 'companyMessageTemplates')
                                        ? <MenuItemLink
                                            to={`/company-message-templates`}
                                            primaryText={translate(`ra.menu.message_templates`)}
                                            leftIcon={<MessageRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'segments')
                                        ? <MenuItemLink
                                            to={`/segments`}
                                            primaryText={translate(`ra.menu.segments`)}
                                            leftIcon={<ListAltRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'dealPlaceholders')
                                        ? <MenuItemLink
                                            to={`/deal-placeholders`}
                                            primaryText={translate(`ra.menu.deal_template`)}
                                            leftIcon={<DetailsRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'serviceUsers')
                                        ? <MenuItemLink
                                            to={`/service-users`}
                                            primaryText={translate(`ra.menu.service_users`)}
                                            leftIcon={<SupervisorAccountRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'regions')
                                        ? <MenuItemLink
                                            to={`/regions`}
                                            primaryText={translate(`ra.menu.regions`)}
                                            leftIcon={<PlaceRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'checklistCategories')
                                        ? <MenuItemLink
                                            to={`/checklist-categories`}
                                            primaryText={translate(`ra.menu.checklists_cats`)}
                                            leftIcon={<CategoryRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'checklists')
                                        ? <MenuItemLink
                                            to={`/checklists`}
                                            primaryText={translate(`ra.menu.checklists`)}
                                            leftIcon={<CheckCircleRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'units')
                                        ? <MenuItemLink
                                            to={`/units`}
                                            primaryText={translate(`ra.menu.units`)}
                                            leftIcon={<StraightenRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'companyProfile')
                                        ? < MenuItemLink
                                            to={`/company-info/1`}
                                            primaryText={translate(`ra.menu.companyInfo`)}
                                            leftIcon={<Lock />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                            </SubMenu>
                            : null,

                        this.hasInPermissions(permissions, ['liftFields', 'messageTemplates', 'deviceTypes', 'liftFieldCategories'])
                            ? <SubMenu
                                handleToggle={() => this.handleToggle('publicSettings')}
                                isOpen={this.state.publicSettings}
                                sidebarIsOpen={open}
                                name="ra.menu.public_settings"
                                icon={<SettingsApplicationsRounded />}
                            >

                                {
                                    this.hasPermisstion(permissions, 'messageTemplates')
                                        ? <MenuItemLink
                                            to={`/message-templates`}
                                            primaryText={translate(`ra.menu.message_templates_settings`)}
                                            leftIcon={<MessageRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'deviceTypes')
                                        ? <MenuItemLink
                                            to={`/device-types`}
                                            primaryText={translate(`ra.menu.device_types`)}
                                            leftIcon={<DevicesRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'liftFieldCategories')
                                        ? <MenuItemLink
                                            to={`/lift-field-categories`}
                                            primaryText={translate(`ra.menu.lift_field_categories`)}
                                            leftIcon={<CategoryRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                                {
                                    this.hasPermisstion(permissions, 'liftFields')
                                        ? <MenuItemLink
                                            to={`/lift-fields`}
                                            primaryText={translate(`ra.menu.lift_fields`)}
                                            leftIcon={<TextFieldsRounded />}
                                            onClick={onMenuClick}
                                        />
                                        : null
                                }

                            </SubMenu>
                            : null,

                    ]}
                />

                <Responsive
                    small={logout}
                    medium={null} // Pass null to render nothing on larger devices
                />
            </div>
        )

    }
}

const mapStateToProps = state => ({
    open: state.admin.ui.sidebarOpen,
    theme: state.theme,
    locale: state.i18n.locale,
});

const enhance = compose(
    withRouter,
    connect(
        mapStateToProps,
        {}
    ),
    translate
);

export default enhance(Menu);