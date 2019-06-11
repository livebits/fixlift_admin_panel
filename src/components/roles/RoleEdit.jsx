import React, {Component}  from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { Edit, SimpleForm, ReferenceArrayInput, SelectArrayInput, TextInput, TextField, 
    ArrayInput, SimpleFormIterator, CheckboxGroupInput, FormDataConsumer,
    DisabledInput, GET_LIST, CREATE, Toolbar, crudCreate } from 'react-admin';
import { Checkbox, Paper, Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress } from '@material-ui/core';
import EditButton from './EditButton';

import { setPermissions } from '../../actions/permission';
import { ROLE_ACTIONS } from '../../constants/role_actions';

const required = (message = 'ra.validation.required') =>
    (value, allValues, props) => value ? undefined : props.translate(message);

const validateName = [required()];

const Title = ({ record }) => {
    return <span>ویرایش نقش "{record.name}"</span>;
};

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});

const EditToolbar = props => (
    <Toolbar {...props}>
        <EditButton
            label="ذخیره"
            redirect="/roles"
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

class RoleEdit extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        role_actions: [],
    };

    actions = ROLE_ACTIONS;

    componentDidMount() {
        
        if(this.props.state.admin.resources !== undefined && this.props.state.admin.resources.roles.data[this.props.id] !== undefined) {

            let data = this.props.state.admin.resources.roles.data[this.props.id];
            let tmp_role_actions = [];
            data.permissions.forEach(item => {
                tmp_role_actions.push(item);
            });
            this.setState({
                role_actions: tmp_role_actions,
            });

            this.props.setPermissions(tmp_role_actions);
        }
    }

    handleChangeActions = (evt) => {
        let tmp_role_actions = this.state.role_actions;
        if(evt.target.checked){
            tmp_role_actions.push(evt.target.value)
        }else{
            tmp_role_actions.splice(tmp_role_actions.indexOf(evt.target.value), 1);
        }
        this.setState({ role_actions: tmp_role_actions });
        this.props.setPermissions(tmp_role_actions);
    }

    render() {

        const { classes } = this.props;

        return (
            <Edit title={<Title />}  {...this.props}>
            
                <SimpleForm toolbar={<EditToolbar />} submitOnEnter={false} redirect="/role" >

                    <DisabledInput label="کد" source="id" />
                    <TextInput label="نام نقش" source="name" validate={validateName} />

                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell >دسترسی ها</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.actions !== null && this.actions.map((action, key) => {
                                    return <TableRow key={key}>
                                        <TableCell>
                                            <FormControlLabel key={key}
                                                control={
                                                    <Checkbox
                                                        name={action.name}
                                                        value={action.name}
                                                        onChange={this.handleChangeActions}
                                                        checked={this.state.role_actions.indexOf(action.name) >= 0 ? true : false}
                                                    />
                                                }
                                                label={action.translate}
                                            />
                                        </TableCell>
                                    </TableRow>;
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </SimpleForm>
            </Edit>
        );
    }
}

RoleEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ state: state });

export default withRouter(connect(mapStateToProps, {
    setPermissions
})(withStyles(styles)(RoleEdit)));