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
                    autoFocus
                    source="name"
                    label="نام"
                    validate={required()}
                />

                <TextInput
                    autoFocus
                    source="nationalCode"
                    label="کدملی"
                    validate={[required(), number()]}
                />

                <TextInput
                    autoFocus
                    source="mobile"
                    label="موبایل"
                    validate={[required(), number()]}
                />

                <TextInput
                    autoFocus
                    source="mobile2"
                    label="موبایل 2"
                    validate={[number()]}
                />

                <TextInput
                    autoFocus
                    source="phone"
                    label="تلفن"
                    validate={[number()]}
                />

                <TextInput
                    autoFocus
                    source="phone2"
                    label="تلفن 2"
                    validate={[number()]}
                />

                <TextInput
                    autoFocus
                    source="subscriptionCode"
                    label="شماره اشتراک"
                />

                <TextInput
                    autoFocus
                    source="birthDate"
                    label="تاریخ تولد"
                />

                <FormDataConsumer>
                    {({ formData, ...rest }) => formData.type == 'company' &&
                        <div style={{ display: 'flex', flexDirection: 'column', width: 256, minWidth: 160 }}>
                            <TextInput
                                autoFocus
                                source="companyName"
                                label="نام شرکت"
                                validate={required()}
                            />

                            <TextInput
                                autoFocus
                                source="nationalId"
                                label="شناسه ملی"
                                validate={required()}
                            />

                            <TextInput
                                autoFocus
                                source="registerNumber"
                                label="شماره ثبت"
                                validate={required()}
                            />

                            <TextInput
                                autoFocus
                                source="economyCode"
                                label="کد اقتصادی"
                            />

                            <TextInput
                                autoFocus
                                source="postalCode"
                                label="کد پستی"
                            />

                            <TextInput
                                autoFocus
                                source="province"
                                label="استان"
                            />

                            <TextInput
                                autoFocus
                                source="town"
                                label="شهرستان"
                            />

                            <TextInput
                                autoFocus
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
