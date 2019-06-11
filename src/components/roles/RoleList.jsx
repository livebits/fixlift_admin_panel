import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';
import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';
import Chip from '@material-ui/core/Chip';
import { ACTIONS } from '../../constants/role_actions';

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

const actions = ACTIONS;

const PermissionsField = ({ record, translate }) => (
    <span style={styles.main}>
        {record.permissions &&
            record.permissions.map(permission => (
                <Chip
                    key={permission}
                    style={styles.chip}
                    label={actions[permission]}
                />
            ))}
    </span>
);


PermissionsField.defaultProps = {
    addLabel: true,
    source: 'permissions',
    label: 'دسترسی ها'
};

export const RoleList = props => (
    <List {...props} bulkActions={false} title="مدیریت نقش ها">
        <Datagrid>
            <TextField source="id" label="کد" />
            <TextField source="name" label="نام" />
            <PermissionsField />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);