import React from 'react';
import {
    Create,
    FormTab,
    TextInput,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    required,
    FormDataConsumer,
    DisabledInput,
    BooleanInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { minLength, number } from 'ra-core';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';

export const styles = {
    stock: { width: '5em' },
    price: { width: '5em' },
    mobile: { width: '8em' },
    mobileFormGroup: { display: 'inline-block' },
    phone: { width: '8em' },
    phoneFormGroup: { display: 'inline-block', marginRight: 32 },
};

const validatePassword = [required(), minLength(6, 'ra.validation.minLength')];

const CustomerCreate = ({ classes, ...props }) => (
    <Create title="ثبت مشتری جدید" {...props}>
        <TabbedForm>
            <FormTab label="ra.customer.general">

                <SelectInput source="type" defaultValue="user" label="نوع مشتری" choices={[
                    { id: 'user', name: 'حقیقی' },
                    { id: 'company', name: 'حقوقی' },
                ]} />

                <TextInput
                     
                    source="name"
                    label="نام"
                    validate={required()}
                />

                <TextInput
                     
                    source="nationalCode"
                    label="کدملی"
                    validate={[required(), number()]}
                />

                <TextInput
                     
                    source="mobile"
                    label="موبایل"
                    validate={[required(), number()]}
                />

                <TextInput
                     
                    source="mobile2"
                    label="موبایل 2"
                    validate={[number()]}
                />

                <TextInput
                     
                    source="phone"
                    label="تلفن"
                    validate={[number()]}
                />

                <TextInput
                     
                    source="phone2"
                    label="تلفن 2"
                    validate={[number()]}
                />

                <TextInput
                    source="subscriptionCode"
                    label="شماره اشتراک"
                />

                <CustomDateInput
                    source="birthDate"
                    label="تاریخ تولد"
                />

                <FormDataConsumer>
                    {({ formData, ...rest }) => formData.type == 'company' &&
                        <div style={{ display: 'flex', flexDirection: 'column', width: 256, minWidth: 160 }}>
                            <TextInput
                                 
                                source="companyName"
                                label="نام شرکت"
                                validate={required()}
                            />

                            <TextInput
                                 
                                source="nationalId"
                                label="شناسه ملی"
                                validate={required()}
                            />

                            <TextInput
                                 
                                source="registerNumber"
                                label="شماره ثبت"
                                validate={required()}
                            />

                            <TextInput
                                 
                                source="economyCode"
                                label="کد اقتصادی"
                            />

                            <TextInput
                                 
                                source="postalCode"
                                label="کد پستی"
                            />

                            <TextInput
                                 
                                source="province"
                                label="استان"
                            />

                            <TextInput
                                 
                                source="town"
                                label="شهرستان"
                            />

                            <TextInput
                                 
                                source="city"
                                label="شهر"
                            />

                        </div>
                    }
                </FormDataConsumer>

            </FormTab>
            <FormTab label="ra.customer.user" path="user">

                <p>نام کاربری همان شماره موبایل می باشد.</p>

                {/* <TextInput
                    label="رمز عبور"
                    source="password"
                    type="password"
                    validate={validatePassword} /> */}

                <BooleanInput label="دسترسی به اپلیکیشن" source="canUseApp" />

                <BooleanInput label="ارسال خودکار sms" source="autoSendSms" />

            </FormTab>
        </TabbedForm>
    </Create>
);

export default withStyles(styles)(CustomerCreate);
