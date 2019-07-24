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
    return <span>ویراش اطلاعات شرکت</span>;
};

const validateCompanyUpdate = (values) => {
    const errors = {};
    if (values.password != values.repeat) {
        errors.repeat = ['رمز جدید و تکرار رمز باید یکسان باشند.'];
    }
    return errors
};

const CompanyInfo = ({ classes, ...props }) => (
    <Edit title={<Title />} {...props} redirect={false}>
        <TabbedForm redirect={false} validate={validateCompanyUpdate}>
            <FormTab label="ra.company.general">
                <TextInput
                    autoFocus
                    source="title"
                    label="عنوان شرکت"
                    options={{ fullWidth: true }}
                    validate={required()}
                />

            </FormTab>
            <FormTab label="ra.company.user" path="user">

                {/* <TextInput 
                    label="نام کاربری" 
                    source="username" 
                    validate={required()} />

                <ReferenceInput label="نقش" source="role" reference="roles" >
                    <SelectInput optionText="name"/>
                </ReferenceInput> */}

                <TextInput label="رمز جدید" source="password" type="password" validate={minLength(6)} />
                <TextInput label="تکرار رمز" source="repeat" type="password" validate={minLength(6)} />

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

export default withStyles(styles)(CompanyInfo);
