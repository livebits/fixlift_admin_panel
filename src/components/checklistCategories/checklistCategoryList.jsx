import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';
import * as Number from "../CustomComponents/Number";

export const checklistCategoryList = props => (
    <List {...props} title='دسته بندی چک لیست ها' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='title' label='عنوان' />
            <TextField source='priority' label='اولویت' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);