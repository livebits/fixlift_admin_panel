import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';
import moment from "jalali-moment";
import * as Number from "../CustomComponents/Number";

export const checklistList = props => (
    <List {...props} title='مدیریت چک لیست ها' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='title' label='عنوان' />
            <TextField source='priority' label='اولویت' />
            <TextField source='checklistCategory' label='دسته بندی' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);