// in src/users.js
import React, { Fragment } from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, FunctionField, EditButton, DeleteButton, ShowButton, Filter, SelectInput,
      ReferenceInput, Pagination } from 'react-admin';
import RolesField from './RolesField'; 

import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';
var moment = require('moment-jalaali');
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

const castDateToJalali = (date) => {
    
    return (date != null && (typeof date === 'string')) ? `${moment(date, 'YYYY-M-D').format('jYYYY/jMM/jDD')}` : ''
};

const PostPagination = props => <Pagination rowsPerPageOptions={[10000]} {...props} />

export const CustomerList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>}  title="مدیریت مشتریان" perPage={10000} pagination={<PostPagination />}>
        <Datagrid selectMode="single" rowClick='edit'>
            <TextField label="کد" source="id" />
            <TextField label="نام مشتری" source="name" />
            <TextField label="موبایل" source="mobile" />
            <TextField label="تلفن" source="phone" />
            <TextField label="کد ملی" source="nationalCode" />
            <FunctionField source='lastLogin' label="آخرین ورود" render={record => castDateToJalali(record.lastLogin)} />
            
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);