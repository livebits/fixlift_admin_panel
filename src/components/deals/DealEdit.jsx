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
    AutocompleteInput,
    CheckBox,
    NumberInput,
    RadioButtonGroupInput,
    CheckboxGroupInput,
    LongTextInput,
    Edit
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { minLength, number, minValue, maxValue, GET_ONE } from 'ra-core';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';
import CustomMapInput from '../CustomComponents/CustomMapInput';
import { Typography } from '@material-ui/core';
import dataProvider from '../dataProvider/dataProvider';

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
    return <span>ویراش قرارداد {record ? `"${record.contractNumber}"` : ''}</span>;
};

const HasSpecialRepairManBooleanInput = (props) => {
    return <BooleanInput label={props.label} source={props.source} defaultValue={props.record.repairManId ? true : false} />
};

const HasWarrantyFinishDateBooleanInput = (props) => {
    return <BooleanInput label={props.label} source={props.source} defaultValue={props.record.warrantyFinishDate ? true : false} />
};

const InsuranceBooleanInput = (props) => {
    return <BooleanInput label={props.label} source={props.source} defaultValue={props.record.insuranceId ? true : false} />
};

const HasResidentBooleanInput = (props) => {
    props.record.hasResidentServiceUser = props.record.hasResidentServiceUser ? true : false;
    return <BooleanInput label={props.label} source={props.source} defaultValue={props.record.hasResidentServiceUser} />
};

const HasTwoMonthServiceBooleanInput = (props) => {
    props.record.hasTwoMonthService = props.record.hasTwoMonthService ? true : false;
    return <BooleanInput label={props.label} source={props.source} defaultValue={props.record.hasTwoMonthService} />
};

class DealEdit extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        liftFields: "",
        selectedLiftFields: 0,
        changed: false,
    }

    showCatField = (field) => {

        switch (field.field_type) {
            case "string":
                return <TextInput label={field.title} source={`field._${field.id}_${field.lift_field_value_id}`} options={{ fullWidth: true }} />

            case "integer":
                return <NumberInput label={field.title} source={`field._${field.id}_${field.lift_field_value_id}`} options={{ fullWidth: true }} />
            default:
                break;
        }

        return <div></div>
    }

    render() {
        const { classes } = this.props;
        return <Edit title={<Title />} {...this.props}>
            <TabbedForm defaultValue={{ hasSpecialRepairMan: true }}>
                <FormTab label="ra.deal.selectCustomer">

                    <DisabledInput label="کد " source="id" />

                    <ReferenceInput label="انتخاب مشتری" validate={required()} source="customerId" reference="customers">
                        <AutocompleteInput optionText="name" />
                    </ReferenceInput>

                </FormTab>
                <FormTab label="ra.deal.selectServiceUser" path="service">

                    <ReferenceInput label="انتخاب سرویس کار" validate={required()} source="serviceUserId" reference="service-users">
                        <AutocompleteInput optionText="name" />
                    </ReferenceInput>

                    <HasSpecialRepairManBooleanInput label="تعمیرکار مخصوص خرابی ها" source="hasSpecialRepairMan" />
                    <FormDataConsumer>
                        {({ formData, ...rest }) => formData.hasSpecialRepairMan &&
                            <ReferenceInput label="انتخاب تعمیر کار" source="repairManId" reference="service-users">
                                <AutocompleteInput optionText="name" />
                            </ReferenceInput>
                        }
                    </FormDataConsumer>

                    <ReferenceInput label="منطقه ساختمان" validate={required()} source="buildingRegion" reference="regions">
                        <AutocompleteInput optionText="name" />
                    </ReferenceInput>

                    <NumberInput label="روز سرویس" validate={[required(), minValue(1), maxValue(30)]} source="serviceDay" />

                    <HasResidentBooleanInput label="سرویس مقیم" source="hasResidentServiceUser" />

                    <HasTwoMonthServiceBooleanInput label="سرویس دو ماه یکبار" source="hasTwoMonthService" />

                    <RadioButtonGroupInput label="نوع سرویس" validate={required()} source="serviceTimeType" optionText="title" choices={[
                        { id: 'official', title: 'خدمات در ساعات اداری' },
                        { id: 'all_time', title: 'خدمات در ساعات اداری و غیر اداری' },
                    ]} />

                </FormTab>

                <FormTab label="ra.deal.dealInfo" path="deal">

                    <TextInput label="شماره قرارداد" validate={required()} source="contractNumber" />

                    <TextInput label="نام ساختمان" validate={required()} source="buildingName" />

                    <TextInput label="نام دوم" source="secondName" />

                    <CustomDateInput source="contractStartDate" validate={required()} label="تاریخ شروع" />

                    <CustomDateInput label="تاریخ پایان" validate={required()} source="contractFinishDate" />

                    <HasWarrantyFinishDateBooleanInput label="تاریخ پایان گارانتی" source="hasWarrantyFinishDate" />
                    <FormDataConsumer>
                        {({ formData, ...rest }) => formData.hasWarrantyFinishDate &&
                            <CustomDateInput label="تاریخ پایان گارانتی" source="warrantyFinishDate" />
                        }
                    </FormDataConsumer>

                    <LongTextInput label="آدرس" validate={required()} source="address" />

                    <LongTextInput label="توضیحات" source="description" />

                </FormTab>

                <FormTab label="ra.deal.insurance" path="cost">

                    <NumberInput label="هزینه کل سرویس ها (تومان)" source="fullDealCost" />

                    <NumberInput label="تخفیف (تومان)" source="discount" />

                    <FormDataConsumer>
                        {({ formData, ...rest }) =>
                            <DisabledInput
                                label="هزینه کل سرویس (تومان)"
                                defaultValue={(formData.fullDealCost > 0 && formData.discount > 0) ? (formData.fullDealCost - formData.discount) : 0}
                            />
                        }
                    </FormDataConsumer>

                    <NumberInput label="هزینه هر سرویس (تومان)" validate={required()} source="costPerService" />

                    <NumberInput label="بدهی از قبل (تومان)" source="previousDebt" />

                    <InsuranceBooleanInput label="بیمه" source="insurance" />
                    <FormDataConsumer>
                        {({ formData, ...rest }) => formData.insurance &&
                            <div style={{ display: 'flex', flexDirection: 'column', width: 256, minWidth: 160 }}>

                                <CustomDateInput label="تاریخ شروع" source="startDate" />

                                <CustomDateInput label="تاریخ پایان" source="finishDate" />

                                <NumberInput label="هزینه بیمه (تومان)" source="cost" />
                                <BooleanInput label="احتساب هزینه بیمه در قرارداد" source="addDealCost" />

                                <TextInput label="شماره بیمه" source="insuranceNumber" />
                            </div>
                        }
                    </FormDataConsumer>

                </FormTab>

                <FormTab label="ra.deal.liftId" path="lift">

                    <TextInput label="شناسه ملی آسانسور" source="nationalId" />

                    <NumberInput label="ظرفیت" source="capacity" />

                    <NumberInput label="تعداد توقف" source="stopsCount" />

                    <ReferenceInput label="نوع دستگاه" source="deviceTypeId" validate={required()} reference="device-types">
                        <SelectInput optionText="title" />
                    </ReferenceInput>

                    <SelectInput source="liftType" label="نوع آسانسور" optionText="name" choices={[
                        { id: 'type1', name: 'باربر' },
                        { id: 'type2', name: 'نوع دوم' },
                    ]} />

                    <div style={{ display: 'flex', flexDirection: 'column', width: 256, minWidth: 160 }}>
                        <FormDataConsumer>
                            {({ formData, ...rest }) => {

                                if (this.state.selectedLiftFields !== formData.deviceTypeId) {
                                    this.setState({
                                        selectedLiftFields: formData.deviceTypeId,
                                        changed: true,
                                    })
                                }

                                this.state.changed && this.state.selectedLiftFields &&
                                    dataProvider(GET_ONE, "lifts/get-device-fields", { deviceTypeId: formData.deviceTypeId }).then(fields => {
                                        formData.field = {};

                                        fields = fields.data;
                                        let category = "";
                                        let result = fields.map((field, key) => {

                                            let name = `_${field.id}_${field.lift_field_value_id}`;
                                            Object.assign(formData.field, { [name]: field.value });

                                            if (category !== field.categoryTitle) {
                                                category = field.categoryTitle;
                                                return <div key={key}>
                                                    <Typography variant="h4" component="h4" style={{ marginTop: 25, backgroundColor: '#ececec', textAlign: 'center' }}>{category}</Typography>
                                                    {
                                                        this.showCatField(field)
                                                    }
                                                </div>
                                            } else {
                                                return <div key={key}>
                                                    {
                                                        this.showCatField(field)
                                                    }
                                                </div>
                                            }
                                        })

                                        this.setState({
                                            liftFields: result,
                                            changed: false
                                        })
                                    });

                                return this.state.liftFields;
                            }
                            }
                        </FormDataConsumer>
                    </div>

                </FormTab>

                <FormTab label="ra.deal.location" path="location">

                    <CustomMapInput defaultValue="29.5926:52.5836" source="location" />

                </FormTab>
            </TabbedForm>
        </Edit>
    }
}

export default withStyles(styles)(DealEdit);