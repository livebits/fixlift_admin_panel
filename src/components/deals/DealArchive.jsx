import React, { Fragment } from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, FunctionField, EditButton, DeleteButton, ShowButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';

import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
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
        {/* <CreateButton basePath={basePath} /> */}
        {/* <ExportButton
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        /> */}
    </CardActions>
);

const BulkActionButtons = props => (
    <Fragment>
    </Fragment>
);

const castDateToJalali = (date) => {
    
    return (date != null && (typeof date === 'string')) ? `${moment(date, 'YYYY-M-D').format('jYYYY/jMM/jDD')}` : ''
};

const MoreDetail = ({ id, record, resource }) => (
    <Table size="small" >
        <TableHead>
            <TableRow>
                <TableCell>موبایل مشتری</TableCell>
                <TableCell>شماره بیمه</TableCell>
                <TableCell align="right">مبلغ بیمه</TableCell>
                <TableCell align="right">تاریخ اتمام گارانتی</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell scope="row">{record.customer.mobile}</TableCell>
                <TableCell align="right">{record.insurance != null ? record.insurance.insuranceNumber : ''}</TableCell>
                <TableCell align="right">{record.insurance != null ? record.insurance.cost : ''}</TableCell>
                <TableCell align="right">{castDateToJalali(record.warrantyFinishDate)}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const DealArchive = props => {

    let fakeProps = {
        basePath: "/deals/archive",
        hasCreate: false,
        hasEdit: false,
        hasList: true,
        hasShow: false,
        history: {},
        location: { pathname: "/deals/archive", search: "", hash: "", state: undefined },
        match: { path: "/deals/archive", url: "/deals/archive", isExact: true, params: {} },
        options: {},
        permissions: null,
        resource: "deals-archive"
    }

    return <List {...fakeProps} bulkActions={false} actions={<Actions/>}  title="تاریخچه قراردادها" >
        <Datagrid selectMode="single" expand={<MoreDetail />}>
            <TextField label="کد" source="id" />
            <TextField label="نام مشتری" source="customer.name" />
            <TextField label="نام ساختمان" source="buildingName" />
            <TextField label="شماره قرارداد" source="contractNumber" />
            <FunctionField source='contractFinishDate' label="تاریخ پایان" render={record => castDateToJalali(record.contractFinishDate)} />
            <TextField label="منطقه" source="region.name" />
            <TextField label="سرویس کار" source="serviceUser.name" />
            <TextField label="مبلغ ماهانه" source="costPerService" />
            <TextField label="روز سرویس" source="serviceDay" />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
};