// in src/users.js
import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput, UrlField } from 'react-admin';
import ActionsField from './ActionsField'; 

export const MenuList = props => (
    <List {...props} bulkActions={false} title="مدیریت منوهای پورتال" >
    
        <Datagrid>
            <TextField source="id" label="کد" />
            <TextField source="name" label="عنوان منو" />
            <UrlField source="url" label="آدرس" />
            {/* <NumberField source="position" /> */}
            {/* <ArrayField source="actions"  label="عملیات قابل انجام">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField> */}
            <ActionsField label="عملیات قابل انجام" />
            <EditButton />
            <DeleteButton />
        </Datagrid>   
    </List>
);