import React from 'react';
import {
    ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
    ReferenceInput, SelectInput, TextInput, NumberInput, DisabledInput, LongTextInput,
    ReferenceArrayInput, SelectArrayInput, BooleanInput, Edit
} from 'react-admin';
import { required, minLength, FormDataConsumer, GET_ONE } from 'ra-core';
import dataProvider from '../dataProvider/dataProvider';
import { withStyles } from '@material-ui/core';

class MTEdit extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        tableFeilds: [],
        selectedTable: ''
    }

    render() {
        return <Edit title="ویرایش قالب پیامک" {...this.props}>
            <SimpleForm>
                <DisabledInput label="کد " source="id" />
                <TextInput label="نام قالب" source="title" validate={required()} />
                <LongTextInput label="متن پیش فرض" source="body" validate={required()} />
                <BooleanInput label="وضعیت" source="status" />
                <SelectInput source="propertyModel" label="انتخاب تیبل" validate={required()}  choices={[
                    { id: 'customers', name: 'مشتری' },
                    { id: 'service_users', name: 'سرویس کار' },
                    { id: 'damages', name: 'خرابی' },
                    { id: 'services', name: 'سرویس' },
                    { id: 'deals', name: 'قرارداد' },
                    { id: 'insurances', name: 'بیمه' },
                    { id: 'lifts', name: 'آسانسور' },
                ]} />
                <div style={{ display: 'flex', flexDirection: 'column', width: 256, minWidth: 160 }}>
                    <FormDataConsumer>
                        {({ formData, ...rest }) => {

                            if (this.state.selectedTable !== formData.propertyModel) {
                                this.setState({
                                    selectedTable: formData.propertyModel,
                                    changed: true,
                                })
                            }

                            let result = [];
                            this.state.changed && this.state.selectedTable &&
                                dataProvider(GET_ONE, "deal-placeholders/get-table-fields", { table: formData.propertyModel }).then(fields => {

                                    result = fields.data.map((field, key) => {

                                        return { id: field.Field, name: field.Field };
                                    })

                                    this.setState({
                                        tableFeilds: result,
                                        changed: false
                                    })

                                });

                            return <div>
                                <SelectInput validate={required()}  source="propertyName" label="انتخاب فیلد" choices={this.state.tableFeilds} />
                                <TextInput validate={required()}  source="propertyTitle" label="عنوان فیلد" />

                            </div>
                        }
                        }
                    </FormDataConsumer>
                </div>


            </SimpleForm>
        </Edit >
    }
}

export default withStyles()(MTEdit);