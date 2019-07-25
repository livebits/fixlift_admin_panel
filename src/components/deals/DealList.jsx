import React, { Fragment } from 'react';
import {
    ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
    TextField, FunctionField, EditButton, DeleteButton, BooleanInput, Filter, SelectInput,
    ReferenceInput
} from 'react-admin';

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
            })}
            <CreateButton basePath={basePath} />
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

const ListFilter = (props) => (
    <Filter {...props}>
        <TextInput label="جستجو" source="buildingName" alwaysOn resettable />
        <SelectInput source="dealType" label="نوع قرارداد" optionText="name" alwaysOn resettable choices={[
            { id: 'all', name: 'همه' },
            { id: 'expiredDeals', name: 'قراردادهای رو به اتمام' },
            { id: 'expiredInsurances', name: 'بیمه های رو به اتمام' },
        ]} />
    </Filter>
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
                <TableCell align="right">تاریخ اتمام بیمه</TableCell>
                <TableCell align="right">تاریخ اتمام گارانتی</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell scope="row">{record.customer.mobile}</TableCell>
                <TableCell align="right">{record.insurance != null ? record.insurance.insuranceNumber : ''}</TableCell>
                <TableCell align="right">{record.insurance != null ? record.insurance.cost : ''}</TableCell>
                <TableCell align="right">{castDateToJalali(record.insurance.finishDate)}</TableCell>
                <TableCell align="right">{castDateToJalali(record.warrantyFinishDate)}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const DealList = props => {

    return <List {...props} bulkActions={false} actions={<Actions />} title="مدیریت قراردادها" filters={<ListFilter />} perPage={25} >
        <Datagrid selectMode="single" rowClick='edit' expand={<MoreDetail />}>
            <TextField label="کد" source="id" sortable={false} />
            <TextField label="نام مشتری" source="customer.name" sortable={false} />
            <TextField label="نام ساختمان" source="buildingName" sortable={false} />
            <TextField label="شماره قرارداد" source="contractNumber" sortable={false} />
            <FunctionField source='contractFinishDate' label="تاریخ پایان" render={record => castDateToJalali(record.contractFinishDate)} sortable={false} />
            <TextField label="منطقه" source="region.name" sortable={false} />
            <TextField label="سرویس کار" source="serviceUser.name" sortable={false} />
            <TextField label="مبلغ ماهانه" source="costPerService"sortable={false} />
            <TextField label="روز سرویس" source="serviceDay" sortable={false}/>

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
};