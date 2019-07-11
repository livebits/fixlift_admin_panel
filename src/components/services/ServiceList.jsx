import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput, FunctionField,
      ReferenceInput } from 'react-admin';
var moment = require('moment-jalaali');

export const ServiceList = props => (
    <List {...props} title='مدیریت سرویس ها' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <ReferenceField label="شماره قرارداد" source="dealId" reference="deals">
                <TextField source="contract_number" />
            </ReferenceField>
            <ReferenceField label="سرویس کار" source="serviceUserId" reference="service-users">
                <TextField source="name" />
            </ReferenceField>
            <FunctionField source='time' label='تاریخ سرویس' render={record => `${moment(record.time, 'YYYY-M-D').format('jYYYY/jMM/jDD')}`} />
            <TextField source='doneDate' label='تاریخ انجام' />
            <FunctionField label='زمان سرویس'  render={record => (record.finishTime != null && record.startTime != null) ? `${record.finishTime} ${record.startTime}` : ''} />
            <TextField source='status' label='وضعیت' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);