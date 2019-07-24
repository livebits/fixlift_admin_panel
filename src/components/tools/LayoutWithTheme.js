import React, { Component } from 'react';
import { Layout, Responsive, Sidebar } from 'react-admin';
import {withStyles} from '@material-ui/core/styles';
import Menu from './Menu';

const styles = theme => ({
    content: {
        background: 'rgb(227, 227, 227) none repeat scroll 0% 0%',
        minHeight: '100vh',
        padding: '24px !important'
    },
    sidebar: {
        // height: '100vh',
    }
});


const MySidebar = props => 
    <Responsive
        medium={
            <Sidebar {...props} size={250} />
        }

        small={
            <Sidebar {...props} size={230} />
        }
    />;


const AppLayout = (props) => 
    <Layout {...props} 
        // appBar={MyAppBar}
        sidebar={MySidebar}
        // menu={Menu}
        // notification={MyNotification}
        error={Error} 
    />;

export default withStyles(styles, {withTheme: true})(AppLayout);