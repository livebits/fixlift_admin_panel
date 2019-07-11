import React from 'react';
import {
    ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
    ReferenceInput, SelectInput, TextInput, NumberInput, DisabledInput, LongTextInput,
    ReferenceArrayInput, SelectArrayInput, BooleanInput
} from 'react-admin';
import { required, FormDataConsumer, GET_ONE, number, GET_LIST } from 'ra-core';
import dataProvider from '../dataProvider/dataProvider';
import { withStyles, Divider, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';



class CMT extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        selectedMessageTemplate: '',
        selectedMessageTemplateValues: null,
        changed: false,
        dealPlaceholders: []
    }

    render() {

        let fakeProps = {
            basePath: "/company-message-templates",
            hasCreate: false,
            hasEdit: false,
            hasList: true,
            hasShow: false,
            history: {},
            location: { pathname: "/company-message-templates", search: "", hash: "", state: undefined },
            match: { path: "/company-message-templates", url: "/company-message-templates", isExact: true, params: {} },
            options: {},
            permissions: null,
            resource: "company-message-templates"
        }

        return <Create title="قالب پیام" {...fakeProps}>
            <SimpleForm>

                <ReferenceInput label="نوع قالب" source="messageTemplateId" reference="message-templates">
                    <SelectInput optionText="title" />
                </ReferenceInput>

                <Divider style={{ margin: '15px 0', width: '100%' }} options={{ fullWidth: true }} />

                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <FormDataConsumer>
                        {({ formData, ...rest }) => {

                            if (this.state.selectedMessageTemplate !== formData.messageTemplateId) {
                                this.setState({
                                    selectedMessageTemplate: formData.messageTemplateId,
                                    selectedMessageTemplateValues: null,
                                    changed: true,
                                })
                            }

                            this.state.changed && this.state.selectedMessageTemplate &&
                                dataProvider(GET_ONE, "company-message-templates", { id: formData.messageTemplateId }).then(field => {

                                    field = field.data;

                                    this.setState({
                                        selectedMessageTemplateValues: field,
                                        changed: false
                                    })

                                });

                            if (!this.state.changed && this.state.selectedMessageTemplateValues !== null) {
                                console.log(this.state.selectedMessageTemplateValues);

                                return <div>
                                    <BooleanInput label="وضعیت" source="status" defaultValue={this.state.selectedMessageTemplateValues.status ? true : false} />

                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <NumberInput label="زمان" source="reminderValue" validate={[required(), number()]} style={{ marginLeft: 10 }} defaultValue={this.state.selectedMessageTemplateValues.reminderValue} />
                                        <SelectInput source="reminderTimeTypeValue" defaultValue={this.state.selectedMessageTemplateValues.reminderTimeTypeValue} label="واحد زمان" validate={required()} choices={[
                                            { id: 'minute', name: 'دقیقه' },
                                            { id: 'hour', name: 'ساعت' },
                                            { id: 'day', name: 'روز' },
                                            { id: 'month', name: 'ماه' },
                                        ]} style={{ marginLeft: 10 }} />
                                        <div style={{ marginTop: 40, marginRight: 10 }}>
                                            <Typography variant="subheading" component="p" style={{ marginBottom: 10 }}>
                                                {`قبل از موعد بر اساس فیلد: ${this.state.selectedMessageTemplateValues.propertyTitle}`}
                                            </Typography>
                                        </div>

                                    </div>

                                    <LongTextInput label="متن" source="body" validate={required()} defaultValue={this.state.selectedMessageTemplateValues.body} />
                                </div>
                            }

                        }
                        }
                    </FormDataConsumer>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <FormDataConsumer>
                        {({ formData, ...rest }) => {

                            if (this.state.dealPlaceholders.length == 0) {
                                dataProvider(GET_LIST, "deal-placeholders", {}).then(fields => {

                                    this.setState({
                                        dealPlaceholders: fields.data
                                    })

                                });
                            }

                            if (!this.state.changed && this.state.selectedMessageTemplateValues !== null && this.state.dealPlaceholders.length > 0) {

                                return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <Divider style={{ margin: '15px 0', width: '100%' }} options={{ fullWidth: true }} />
                                    <Typography variant="subheading" component="p" style={{ marginBottom: 10 }}>
                                        {`می توانید از کلمات کلیدی زیر در متن پیامک استفاده کنید.`}
                                    </Typography>
                                    <Paper >
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>نام</TableCell>
                                                    <TableCell align="right">کلمه کلیدی</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.dealPlaceholders.map((row, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{`{${row.keyword}}`}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Paper>
                                </div>
                            }
                        }}
                    </FormDataConsumer>
                </div>
            </SimpleForm>
        </Create>
    }
}

export default withStyles()(CMT);