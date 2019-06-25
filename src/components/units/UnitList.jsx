import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';
import moment from "jalali-moment";

export const UnitList = props => (
    <List {...props} title='مدیریت قطعات' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='name' label='نام' />
            <TextField source='shortcut' label='علامت اختصار' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);