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
import {Link} from "react-router-dom";
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
    };

    render() {
        const { onMenuClick, open, logout, translate } = this.props;

        return (
            <div>
                {' '}
                <DashboardMenuItem onClick={onMenuClick} />
                <MenuItemLink
                    to={`/schedules`}
                    primaryText={translate(`ra.menu.schedules`)}
                    leftIcon={<LabelIcon />}
                    onClick={onMenuClick}
                />
                <SubMenu
                    handleToggle={() => this.handleToggle('menuUsers')}
                    isOpen={this.state.menuUsers}
                    sidebarIsOpen={open}
                    name="ra.menu.users_mgmt"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/users`}
                        primaryText={translate(`ra.menu.users_list`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/users/create`}
                        primaryText={translate(`ra.menu.add_user`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />

                    <MenuItemLink
                        to={`/roles`}
                        primaryText={translate(`ra.menu.roles`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuCompanies')}
                    isOpen={this.state.menuCompanies}
                    sidebarIsOpen={open}
                    name="ra.menu.companies_mgmt"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/companies`}
                        primaryText={translate(`ra.menu.companies_list`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/companies/create`}
                        primaryText={translate(`ra.menu.add_company`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                
                <SubMenu
                    handleToggle={() => this.handleToggle('menuSettings')}
                    isOpen={this.state.menuSettings}
                    sidebarIsOpen={open}
                    name="ra.menu.settings"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/msg_tplt`}
                        primaryText={translate(`ra.menu.message_templates`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/segments`}
                        primaryText={translate(`ra.menu.segments`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />

                    <MenuItemLink
                        to={`/deal_tplt`}
                        primaryText={translate(`ra.menu.deal_template`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/service_users`}
                        primaryText={translate(`ra.menu.service_users`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/regions`}
                        primaryText={translate(`ra.menu.regions`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/checklists`}
                        primaryText={translate(`ra.menu.checklists`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/units`}
                        primaryText={translate(`ra.menu.units`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/password`}
                        primaryText={translate(`ra.menu.password`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>

                <SubMenu
                    handleToggle={() => this.handleToggle('menuDeals')}
                    isOpen={this.state.menuDeals}
                    sidebarIsOpen={open}
                    name="ra.menu.deals_mgmt"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/deals`}
                        primaryText={translate(`ra.menu.deals_list`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/deals/create`}
                        primaryText={translate(`ra.menu.add_deal`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/deals/archive`}
                        primaryText={translate(`ra.menu.deals_archive`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuCustomers')}
                    isOpen={this.state.menuCustomers}
                    sidebarIsOpen={open}
                    name="ra.menu.customers_mgmt"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/customers`}
                        primaryText={translate(`ra.menu.customers_list`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/customers/create`}
                        primaryText={translate(`ra.menu.add_customer`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuServices')}
                    isOpen={this.state.menuServices}
                    sidebarIsOpen={open}
                    name="ra.menu.services_mgmt"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/services`}
                        primaryText={translate(`ra.menu.services_list`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/services/create`}
                        primaryText={translate(`ra.menu.add_service`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuDamages')}
                    isOpen={this.state.menuDamages}
                    sidebarIsOpen={open}
                    name="ra.menu.damages_mgmt"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/damages`}
                        primaryText={translate(`ra.menu.damages_list`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/damages/create`}
                        primaryText={translate(`ra.menu.add_damage`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuEmergencies')}
                    isOpen={this.state.menuEmergencies}
                    sidebarIsOpen={open}
                    name="ra.menu.emergencies_mgmt"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/emergencies`}
                        primaryText={translate(`ra.menu.emergencies_list`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/emergencies/create`}
                        primaryText={translate(`ra.menu.add_emergency`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuFinancial')}
                    isOpen={this.state.menuFinancial}
                    sidebarIsOpen={open}
                    name="ra.menu.financials_mgmt"
                    icon={<LabelIcon />}
                >
                    <MenuItemLink
                        to={`/financials`}
                        primaryText={translate(`ra.menu.financials_list`)}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>

                {/* <MenuItemLink
                    to={`/reviews`}
                    primaryText={translate(`resources.reviews.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    onClick={onMenuClick}
                /> */}

                {/* <Responsive
                    xsmall={
                        <MenuItemLink
                            to="/configuration"
                            primaryText={translate('pos.configuration')}
                            leftIcon={<LabelIcon />}
                            onClick={onMenuClick}
                        />
                    }
                    medium={null}
                /> */}
                
                <Responsive
                    small={logout}
                    medium={null} // Pass null to render nothing on larger devices
                />
            </div>
        )
    // <div>
    //     <MenuItemLink
    //         classes={classes}
    //         to={`/`}
    //         primaryText="داشبورد"
    //         leftIcon={<DashboardRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/manager`}
    //         primaryText='مدیریت کاربران'
    //         leftIcon={<SupervisedUserCircleRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/user`}
    //         primaryText='کاربران اپ'
    //         leftIcon={<DashboardRounded />}
    //         onClick={onMenuClick} />    

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/quiz`}
    //         primaryText='بانک سوالات'
    //         leftIcon={<QuestionAnswerRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/verifications`}
    //         primaryText='کدهای احراز هویت'
    //         leftIcon={<VerifiedUserRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/charts`}
    //         primaryText='آمار'
    //         leftIcon={<BarChartRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/role`}
    //         primaryText='نقش ها'
    //         leftIcon={<LockRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/menu`}
    //         primaryText='منوها'
    //         leftIcon={<MenuRounded />}
    //         onClick={onMenuClick}/>

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/users-on-map`}
    //         primaryText='کاربران روی نقشه'
    //         leftIcon={<MapRounded />}
    //         onClick={onMenuClick}/>    

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/message`}
    //         primaryText='پیام ها'
    //         leftIcon={<MessageRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/bots`}
    //         primaryText='مدیریت بات ها'
    //         leftIcon={<DashboardRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/popup`}
    //         primaryText='پاپ آپ ها'
    //         leftIcon={<DashboardRounded />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/log`}
    //         primaryText='گزارشات'
    //         leftIcon={<ReportOutlined />}
    //         onClick={onMenuClick} />

    //     <MenuItemLink
    //         classes={classes}
    //         to={`/support`}
    //         primaryText='پشتیبانی'
    //         leftIcon={<ContactSupportRounded />}
    //         onClick={onMenuClick} />
        
    //     <MenuItemLink
    //         classes={classes}
    //         to={`/setting`}
    //         primaryText='تنظیمات اصلی'
    //         leftIcon={<SettingsApplicationsRounded />}
    //         onClick={onMenuClick} />

    //     <Responsive
    //         small={logout}
    //         medium={null} // Pass null to render nothing on larger devices
    //     />
    // </div>
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