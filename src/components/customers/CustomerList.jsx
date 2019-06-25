// in src/users.js
import React, { Fragment } from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, FunctionField, EditButton, DeleteButton, ShowButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';
import RolesField from './RolesField'; 

import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';

const Actions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath={basePath} />
        <ExportButton
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
    </CardActions>
);

const BulkActionButtons = props => (
    <Fragment>
    </Fragment>
);

export const CustomerList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>}  title="مدیریت مشتریان" >
        <Datagrid selectMode="single" rowClick='edit'>
            <TextField label="کد" source="id" />
            <TextField label="نام مشتری" source="name" />
            <TextField label="موبایل" source="mobile" />
            <TextField label="تلفن" source="phone" />
            
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);