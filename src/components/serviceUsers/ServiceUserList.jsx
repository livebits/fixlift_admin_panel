import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, BooleanField,
      ReferenceInput, Pagination } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[10000]} {...props} />

export const ServiceUserList = props => (
    <List {...props} title='مدیریت سرویس کار ها' perPage={10000} pagination={<PostPagination />}>

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='name' label='نام' />
            <TextField source='mobile' label='موبایل' />
            <BooleanField source='canUseApp' label='دسترسی به App' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);