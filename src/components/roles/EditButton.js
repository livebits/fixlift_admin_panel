import React, { Component } from 'react';
import { connect } from 'react-redux';
import { crudUpdate, SaveButton } from 'react-admin';

// A custom action creator which modifies the values before calling the default crudCreate action creator
const saveWithNote = (id, data, basePath, redirectTo, props) => {
    
    const action = crudUpdate('roles', id, { ...data }, basePath, redirectTo);
    
    action.meta.refresh = true;

    return action;
};

class EditButton extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const { basePath, handleSubmit, redirect, saveWithNote } = this.props;
        
        let state = this.props.state.app.permission;
    
        return handleSubmit(values => {

            let data = {
                id: values.id,
                name: values.name,
                permissions: []
            };
            data.permissions = state.permissions;

            saveWithNote(values.id, data, basePath, redirect, this.props);            
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
    { saveWithNote, crudUpdate }
)(EditButton);