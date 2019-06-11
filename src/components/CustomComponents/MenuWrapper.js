import React, {Component} from "react";
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import PaymentRounded from "@material-ui/icons/PaymentRounded";
import CodeRounded from "@material-ui/icons/CodeRounded";
import MessageRounded from "@material-ui/icons/MessageRounded";
import New from "@material-ui/icons/CreateNewFolderRounded";
import MenuRounded from "@material-ui/icons/MenuRounded";
import ContactSupportRounded from "@material-ui/icons/ContactSupportRounded";
import FunctionsRounded from "@material-ui/icons/FunctionsRounded";
import DriveEtaRounded from "@material-ui/icons/DriveEtaRounded";
import SupervisedUserCircleRounded from "@material-ui/icons/SupervisedUserCircleRounded";
import LocalCarWashRounded from "@material-ui/icons/LocalCarWashRounded";
import ArchiveRounded from "@material-ui/icons/ArchiveRounded";
import MapRounded from "@material-ui/icons/MapRounded";
import PieChartRounded from "@material-ui/icons/PieChartRounded";
import VerifiedUserRounded from "@material-ui/icons/VerifiedUserRounded";
import LockRounded from "@material-ui/icons/LockRounded";
import SettingsApplications from "@material-ui/icons/SettingsApplications";
import Tooltip from "@material-ui/core/Tooltip";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";

class MenuWrapper extends Component {


    getMenuIcon(name) {
        switch (name) {
              case '/':
                return <DashboardRounded/>;
              case '/request/requests-list':
                return <LocalCarWashRounded/>;
              case '/request/archive-requests-list':
                return <ArchiveRounded/>;
              case '/request/new-request':
                return <New/>;
              case '/safir/safirs-list':
                return <DriveEtaRounded/>;
              case '/customer/customers-list':
                return <SupervisedUserCircleRounded/>;
              case '/safir/safirs-on-map':
                return <MapRounded/>;
              case '/request/requests-on-map':
                return <MapRounded/>;
              case '/messages/list':
                return <MessageRounded/>;
              case '/service/list':
                return <FunctionsRounded/>;
              case '/payment/payments-list':
                return <PaymentRounded/>;
              case '/discount/discounts-list':
                return <CodeRounded/>;
              case '/user/users-list':
                return <VerifiedUserRounded/>;
              case '/role/roles-list':
                return <LockRounded/>;
              case '/setting/commission':
                return <SettingsApplications/>; 
              case '/log':
                return <PieChartRounded/>; 
              case '/support/list':
                return <ContactSupportRounded/>;
              case '/menu/menus-list':
                return <MenuRounded/>;
            default:
                return <div />;
        }
    }  

    render() {
        const {menus} = this.props;

        return (
            <div>
                {menus !== undefined && menus.length > 0 && menus.map((menu, key) => (

                    menu !== null ? <Tooltip title={menu.name} key={key}>
                            <ListItem button component={Link} to={menu.url}>
                                <ListItemIcon>
                                    {this.getMenuIcon(menu.url)}
                                </ListItemIcon>
                                <ListItemText primary={menu.name} />
                            </ListItem>
                        </Tooltip> : <div></div>

                ))}
            </div>
        );
    }
}

export default MenuWrapper;