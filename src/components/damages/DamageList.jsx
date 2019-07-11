import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput, FunctionField,
      ReferenceInput } from 'react-admin';
var moment = require('moment-jalaali');

export const DamageList = props => (
    <List {...props} title='مدیریت خرابی ها' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <ReferenceField label="شماره قرارداد" source="dealId" reference="deals">
                <TextField source="contract_number" />
            </ReferenceField>
            <ReferenceField label="سرویس کار" source="serviceUserId" reference="service-users">
                <TextField source="name" />
            </ReferenceField>
            <FunctionField source='contract_finish_date' label='تاریخ ثبت خرابی' render={record => `${moment(record.time, 'YYYY-M-D').format('jYYYY/jMM/jDD')}`} />
            <TextField source='doneDate' label='تاریخ انجام' />
            {/* <FunctionField label='زمان سرویس' /> */}
            <TextField source='status' label='وضعیت' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);