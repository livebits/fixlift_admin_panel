import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, NumberInput, Toolbar, crudCreate } from 'react-admin';
import { Table, Paper, TableHead, TableRow, TableCell, FormControlLabel, Checkbox, TableBody, withStyles } from '@material-ui/core';
import SaveButton from './SaveButton';
import { setPermissions } from '../../actions/permission';
import { ROLE_ACTIONS } from '../../constants/role_actions';

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

const required = (message = 'ra.validation.required') =>
    (value, allValues, props) => value ? undefined : props.translate(message);

const validateName = [required()];

const CreateToolbar = props => (
    <Toolbar {...props}>
        <SaveButton
            label="ذخیره"
            redirect="list"
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

class RoleCreate extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        role_actions: [],
    };

    actions = ROLE_ACTIONS;
    
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
        return <Create {...this.props} title="ثبت نقش جدید">
            <SimpleForm toolbar={<CreateToolbar/>} submitOnEnter={false} redirect="list">
                <TextInput label="نام" source="name" validate={validateName}/>
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
        </Create>
    }
}

RoleCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, {
    setPermissions
})(withStyles(styles)(RoleCreate));