// in src/users.js
import React, { Fragment } from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput, ImageInput, ImageField, NumberInput  } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش شرکت {record ? `"${record.name}"` : ''}</span>;
};

export const CompanyEdit = props => (
    <Edit {...props} title={<Title />}>
        <SimpleForm>
            <DisabledInput source="id" label="کد" />
            <TextInput label="نام شرکت" source="name" />
            {/* <TextInput label="لوگو شرکت" source="logo" /> */}
            {/* <ImageInput source="logo" label="لوگو شرکت" accept="image/*" placeholder={<p>لوگو شرکت را انتخاب کنید</p>}>
                <ImageField source="logo" title="title" />
            </ImageInput> */}
            <SelectInput source="status" label="وضعیت" choices={[
                { id: 'active', name: 'فعال' },
                { id: 'inactive', name: 'غیرفعال' }
            ]} />
            <TextInput label="نام مدیر مربوطه" source="managerName" />
            <NumberInput label="تلفن شرکت" source="phone" />
            <NumberInput label="موبایل" source="mobile" />
            <LongTextInput  label="آدرس شرکت" source="address" />
        </SimpleForm>
    </Edit>
);