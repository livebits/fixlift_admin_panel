import React, { Component } from 'react';
import { connect } from 'react-redux';
import { crudCreate, SaveButton, CREATE } from 'react-admin';
import dataProvider from '../dataProvider/dataProvider';
import { push } from 'react-router-redux';
import {
    showNotification,
    fetchStart,
    fetchEnd
} from 'react-admin';

// A custom action creator which modifies the values before calling the default crudCreate action creator
const saveWithNote = (data, basePath, redirectTo, props) => {
    
    const action = crudCreate('roles', { ...data }, basePath, redirectTo);
    
    action.meta.refresh = true;

    return action;
};

class SaveRoleButton extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const { basePath, handleSubmit, redirect, saveWithNote } = this.props;
        
        let state = this.props.state.app.permission;
            
        return handleSubmit(values => {

            let data = {
                name: values.name,
                permissions: []
            };
            data.permissions = state.permissions;

            saveWithNote(data, basePath, redirect, this.props);
        });
    };

    render() {
        const { handleSubmitWithRedirect, saveWithNote, ...props } = this.props;
        
        return (
            <SaveButton
                handleSubmitWithRedirect={this.handleClick}
                {...props}
            />
        );
    }
}

const mapStateToProps = state => ({ state: state });

export default connect(
    mapStateToProps,
    { 
        saveWithNote,
        // crudCreate,
        showNotification,
        fetchStart,
        fetchEnd,
        push,
    }
)(SaveRoleButton);