import React from 'react';
import {
    ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
    ReferenceInput, SelectInput, TextInput, NumberInput, DisabledInput, LongTextInput,
    ReferenceArrayInput, SelectArrayInput, translate
} from 'react-admin';
import { required, minLength, FormDataConsumer, GET_ONE } from 'ra-core';
import dataProvider from '../dataProvider/dataProvider';
import { withStyles } from '@material-ui/core';

class DPHCreate extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        tableFeilds: [],
        selectedTable: ''
    }

    render() {
        return <Create title="ثبت آیتم فرم قرارداد" {...this.props}>
            <SimpleForm>
                <TextInput label="کلمه کلیدی" source="keyword" validate={required()} />
                <TextInput label="عنوان" source="name" validate={required()} />
                <SelectInput source="propertyModel" label="انتخاب تیبل" validate={required()}  choices={[
                    { id: 'customers', name: 'مشتری' },
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

                            return <SelectInput validate={required()}  source="propertyName" label="انتخاب فیلد" choices={this.state.tableFeilds} />
                        }
                        }
                    </FormDataConsumer>
                </div>


            </SimpleForm>
        </Create >
    }
}

export default withStyles()(DPHCreate);