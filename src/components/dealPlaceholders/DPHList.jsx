import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';

export const DPHList = props => (
    <List {...props} title='فیلدهای فرم قرارداد ' >

        <Datagrid selectMode="single" rowClick='edit'>
            <TextField source='id' label='کد' />
            <TextField source='keyword' label='کلمه کلیدی' />
            <TextField source='name' label='نام' />
            <TextField source='propertyModel' label=" تیبل" />
            <TextField source='propertyName' label=' فیلد' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);