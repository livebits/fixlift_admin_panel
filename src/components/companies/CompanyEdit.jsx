import React from 'react';
import {
    Create,
    FormTab,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    TextInput,
    required,
    Edit,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { minLength, number } from 'ra-core';
import CustomMapInput from '../CustomComponents/CustomMapInput';

export const styles = {
    stock: { width: '5em' },
    price: { width: '5em' },
    mobile: { width: '8em' },
    mobileFormGroup: { display: 'inline-block' },
    phone: { width: '8em' },
    phoneFormGroup: { display: 'inline-block', marginRight: 32 },
};

const validatePassword = [required(), minLength(6, 'ra.validation.minLength')];

const Title = ({ record }) => {
    return <span>ویراش شرکت {record ? `"${record.title}"` : ''}</span>;
};

const CompanyEdit = ({ classes, ...props }) => (
    <Edit title={<Title/>} {...props}>
        <TabbedForm>
            <FormTab label="ra.company.general">
                <TextInput
                    autoFocus
                    source="title"
                    label="عنوان شرکت"
                    options={{ fullWidth: true }}
                    validate={required()}
                />

                <SelectInput 
                    source="status" 
                    label="وضعیت" 
                    validate={required()}
                    choices={[
                        { id: 'active', name: 'فعال' },
                        { id: 'inactive', name: 'غیرفعال' },
                    ]} 
                />

            </FormTab>
            <FormTab label="ra.company.user" path="user">
                
                <TextInput 
                    label="نام کاربری" 
                    source="username" 
                    validate={required()} />

                <ReferenceInput label="نقش" source="role" reference="roles" >
                    <SelectInput optionText="name"/>
                </ReferenceInput>

            </FormTab>
            <FormTab label="ra.company.contact" path="contact">
                
                <TextInput
                    source="address"
                    label="آدرس"
                    options={{ fullWidth: true }}
                    validate={required()}
                />

                <TextInput
                    source="mobile"
                    label="موبایل"
                    validate={[required(), number()]}
                />
                <TextInput
                    source="phone"
                    label="تلفن"
                    validate={[required(), number()]}
                />

                {/* <NumberInput
                    source="latitude"
                    label="طول جغرافیایی"
                />
                <NumberInput
                    source="longitude"
                    label="عرض جغرافیایی"
                /> */}

            </FormTab>
            <FormTab label="ra.deal.location" path="location">
                <CustomMapInput defaultValue="29.5926:52.5836" source="location" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default withStyles(styles)(CompanyEdit);
