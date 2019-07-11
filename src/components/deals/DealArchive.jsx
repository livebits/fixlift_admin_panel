import React, { Fragment } from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, FunctionField, EditButton, DeleteButton, ShowButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';

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
        <Datagrid selectMode="single" >
            <TextField label="کد" source="id" />
            <TextField label="نام مشتری" source="customer_name" />
            <TextField label="نام ساختمان" source="building_name" />
            <TextField label="شماره قرارداد" source="contract_number" />
            <FunctionField source='contract_finish_date' label="تاریخ پایان" render={record => record.contract_finish_date ? `${moment(record.contract_finish_date, 'YYYY-M-D').format('jYYYY/jMM/jDD')}` : ``} />
            <TextField label="منطقه" source="region" />
            <TextField label="سرویس کار" source="service_user_name" />
            <TextField label="مبلغ ماهانه" source="cost_per_service" />
            <TextField label="روز سرویس" source="service_day" />
            
            {/* <EditButton /> */}
            <DeleteButton />
        </Datagrid>
    </List>
};