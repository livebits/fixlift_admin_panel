import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput, FunctionField,
      ReferenceInput } from 'react-admin';
var moment = require('moment-jalaali');

const subtractDates = (startDate, finishDate) => ((new Date(finishDate)).getTime() - (new Date(startDate)).getTime())/(1000*60);
const castDateToJalali = (date) => {
    
    return (date != null && (typeof date === 'string')) ? `${moment(date, 'YYYY-M-D').format('jYYYY/jMM/jDD')}` : ''
};

const ListFilter = (props) => (
    <Filter {...props}>
        <TextInput label="جستجو" source="search" alwaysOn resettable />
        <SelectInput source="serviceType" label="نوع سرویس" optionText="name" alwaysOn resettable choices={[
            { id: 'all', name: 'همه' },
            { id: 'done', name: 'سرویس های انجام شده' },
            { id: 'undone', name: 'سرویس های انجام نشده' },
        ]} />
        <SelectInput source="serviceTime" label="زمان سرویس" optionText="name" alwaysOn resettable choices={[
            { id: 'all', name: 'همه' },
            { id: 'thisWeek', name: 'این هفته' },
            { id: 'lastWeek', name: 'هفته گذشته' },
            { id: 'thisMonth', name: 'این ماه' },
            { id: 'lastMonth', name: 'ماه گذشته' },
            { id: 'thisYear', name: 'امسال' },
            { id: 'lastYears', name: 'سال های گذشته' },
        ]} />
    </Filter>
);

export const ServiceList = props => (
    <List {...props} bulkActions={false} undoable={false} title='مدیریت سرویس ها' filters={<ListFilter />} perPage={25}>

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <ReferenceField label="شماره قرارداد" source="dealId" reference="deals">
                <TextField source="contractNumber" />
            </ReferenceField>
            <ReferenceField label="سرویس کار" source="serviceUserId" reference="service-users">
                <TextField source="name" />
            </ReferenceField>
            <FunctionField source='time' label='تاریخ سرویس' render={record => castDateToJalali(record.time)} />
            <FunctionField source='doneDate' label='تاریخ انجام' render={record => castDateToJalali(record.doneDate)} />
            <FunctionField label='زمان سرویس (دقیقه)'  render={record => (record.finishTime != null && record.startTime != null) ? subtractDates(record.startTime, record.finishTime) : ''} />
            <FunctionField label='وضعیت'  render={record => record.status != null ? (record.status == "done" ? "انجام شده" : "انجام نشده") : ""} />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);