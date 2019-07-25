import React, { Fragment } from 'react';
import {
    ReferenceArrayField, SaveButton, BooleanInput, FormDataConsumer, Create, SimpleForm,
    ReferenceInput, SelectInput, NumberInput, DisabledInput, LongTextInput,
    TabbedForm, AutocompleteInput, Edit, FormTab
} from 'react-admin';
import { minLength, required, refreshView, DELETE } from 'ra-core';
import { CustomDateInput, CustomTimeInput } from '../CustomComponents/CustomDatePicker';
import { Table, TableHead, TableRow, TableCell, TableBody, Divider, Typography, Button, withStyles, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import GridItem from "../CustomComponents/Grid/GridItem";
import GridContainer from "../CustomComponents/Grid/GridContainer.jsx";
import DeleteForever from '@material-ui/icons/DeleteForever';
import Add from '@material-ui/icons/Add';
import Cancel from '@material-ui/icons/Cancel';
import Save from '@material-ui/icons/Save';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { push } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { Drawer } from '@material-ui/core';
import ServiceSegmentCreate from './ServiceSegmentCreate';
import dataProvider from '../dataProvider/dataProvider';

const styles = {
    drawerContent: {
        width: 300
    }
};

const Title = ({ record }) => {
    return <span> ویراش سرویس {record ? `"${record.id}"` : ''}</span>;
};

class ServiceEdit extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        showSegmentDrawer: false,
        checklistStatus: [],
        saveChecklistsState: false,
    }

    showSegmentDrawer = () => {
        this.setState({
            showSegmentDrawer: true
        })
    }

    closeSegmentDrawer = () => {
        this.setState({
            showSegmentDrawer: false
        })
    }

    onSubmit = () => {
        this.setState({
            showSegmentDrawer: false
        })
        this.props.refreshView();
    }

    deleteServiceSegment = (serviceSegmentId) => {

        dataProvider(DELETE, "service-segments", { id: serviceSegmentId }).then(fields => {
            
            this.props.refreshView();
        });
    }

    render() {
        
        const { classes } = this.props;
        return <Fragment>
            <Edit title={<Title />} {...this.props}>
                <TabbedForm>
                    <FormTab label="ra.service.public" path="">
                        <DisabledInput label="کد " source="id" />
                        <ReferenceInput label="قرارداد" source="dealId" reference="deal-names" validate={required()}>
                            <AutocompleteInput optionText={query => `${query.contractNumber} (نام ساختمان: ${query.buildingName})`} />
                        </ReferenceInput>

                        <ReferenceInput label="انتخاب سرویس کار" validate={required()} source="serviceUserId" reference="service-users">
                            <AutocompleteInput optionText="name" />
                        </ReferenceInput>

                        <LongTextInput label="گزارش سرویسکار" source="serviceUserReport" />

                        <CustomDateInput label="تاریخ سرویس" validate={required()} source="time" />
                        <CustomDateInput label="تاریخ انجام سرویس" source="doneDate" />

                        <CustomTimeInput label="زمان شروع" source="startTime" type="time" />
                        <CustomTimeInput label="زمان پایان" source="finishTime" type="time" />

                        <LongTextInput label="یادآوری سرویس بعد" source="serviceUserReminder" />
                        <LongTextInput label="توضیحات مشتری" source="customerDescription" />

                        <SelectInput source="status" label="وضعیت" optionText="name" choices={[
                            { id: 'submitted', name: 'انجام نشده' },
                            { id: 'done', name: 'انجام شده' },
                        ]} />
                    </FormTab>
                    <FormTab label="ra.service.checklist" path="checklist">

                        <FormDataConsumer>
                            {({ formData, record, ...rest }) => {

                                let hasChecklist = record.checklists && record.checklists.length > 0;
                                if (hasChecklist) {

                                    if(!this.state.saveChecklistsState) {

                                        this.setState({
                                            saveChecklistsState: true,
                                            checklistStatus: []
                                        })
                                    }
                                    let currentCategory = "_";
                                    let result = record.checklists.map((checklist, index) => {

                                        // if(this.state.checklistStatus.length > 0 && this.state.checklistStatus[index] != null ) {
                                        //     let array = this.state.checklistStatus;
                                        //     array[index] = (checklist.status === null || checklist.status === "-1") ? false : true;
                                        //     this.setState({
                                        //         checklistStatus: array
                                        //     })
                                        // } else {
                                        //     let array = this.state.checklistStatus;
                                        //     array[index] = (checklist.status === null || checklist.status === "-1") ? false : true;
                                        //     this.setState({
                                        //         checklistStatus: array
                                        //     })
                                        // }
                                        
                                        let data = <GridContainer key={index}>

                                            {
                                                (checklist.checkListCategoryTitle != currentCategory && index > 0) ? <GridItem xs={12}> <Divider /> </GridItem> : <div />
                                            }

                                            {
                                                (checklist.checkListCategoryTitle != currentCategory) ? <GridItem xs={12}> <Typography variant="subheading" style={{ marginTop: 10 }}>{checklist.checkListCategoryTitle}</Typography> </GridItem> : <div />
                                            }

                                            <DisabledInput source={`checklists[${index}].id`} style={{display: 'none'}} />
                                            <GridItem xs={6} sm={3} md={2}>

                                                <BooleanInput
                                                    style={{ marginTop: 10 }}
                                                    defaultValue={checklist.isChecked}
                                                    source={`checklists[${index}].isChecked`}
                                                    label={checklist.title}
                                                />

                                            </GridItem>
                                            <GridItem xs={6} sm={3} md={2}>

                                                <SelectInput
                                                    style={{ marginTop: 0 }}
                                                    source={`checklists[${index}].status`}
                                                    defaultValue={(checklist.status === null) ? "0" : checklist.status === "0" ? "0" : "1"}
                                                    label="  "
                                                    choices={[
                                                        { id: '1', name: 'سالم' },
                                                        { id: '0', name: 'خراب' },
                                                    ]}
                                                />

                                            </GridItem>

                                        </GridContainer>;
                                        currentCategory = checklist.checkListCategoryTitle;

                                        return data;
                                    });

                                    return result;

                                } else {

                                }
                            }
                            }
                        </FormDataConsumer>

                    </FormTab>
                    <FormTab label="ra.service.segments" path="segment">

                        <Button variant="contained" color="primary" style={{ marginTop: 20, width: 160 }} onClick={this.showSegmentDrawer} >
                            <Add color="default" />
                            افزودن قطعه جدید
                        </Button>

                        <FormDataConsumer>
                            {({ formData, record, ...rest }) => {

                                let hasSegments = record.segments && record.segments.length > 0;
                                if (hasSegments) {

                                    let result = record.segments.map((segment, index) => {


                                        let data = <GridContainer key={index}>

                                            <DisabledInput source={`segments[${index}].id`} style={{display: 'none'}} />
                                            <GridItem md={3}>

                                                <DisabledInput label="نام قطعه " source={`segments[${index}].name`} defaultValue={segment.name} />

                                            </GridItem>
                                            <GridItem md={2}>

                                                <DisabledInput style={{ width: 100 }} label="قیمت واحد" source={`segments[${index}].price`} defaultValue={segment.singleCost} />

                                            </GridItem>
                                            <GridItem md={2}>

                                                <NumberInput style={{ width: 100 }} label="تعداد " source={`segments[${index}].count`} defaultValue={segment.count} />

                                            </GridItem>

                                            <GridItem md={2}>

                                                <DisabledInput style={{ width: 100 }} label="قیمت کل" source={`segments[${index}].cost`} defaultValue={segment.cost} />

                                            </GridItem>

                                            <GridItem md={2}>

                                                <Button variant="text" style={{ marginTop: 20 }} onClick={this.deleteServiceSegment.bind(this, segment.serviceSegmentId)}>
                                                    <DeleteForever color="error" />
                                                    <Typography style={{ color: 'red' }}>حذف</Typography>
                                                </Button>

                                            </GridItem>

                                            <GridItem xs={12}> <Divider /> </GridItem>

                                        </GridContainer>;

                                        return data;
                                    });

                                    return result;

                                }
                            }
                            }
                        </FormDataConsumer>

                        <FormDataConsumer>
                            {({ formData, record, ...rest }) => {
                                return record.serviceFactors && record.serviceFactors.length > 0 ? <div style={{ marginTop: 10, marginBottom: 10 }} /> : <div />
                            }
                            }
                        </FormDataConsumer>

                        <FormDataConsumer>
                            {({ formData, record, ...rest }) => {
                                let hasFactor = record.serviceFactors && record.serviceFactors.length > 0;
                                if (hasFactor) {
                                    let result = record.serviceFactors.map((serviceFactor, index) => {

                                        let data = <GridContainer key={index}>

                                            <GridItem md={3}>

                                                <DisabledInput label="قیمت فاکتور" source={`segment_name_${serviceFactor.id}`} defaultValue={serviceFactor.cost} />

                                            </GridItem>
                                            <GridItem md={3}>

                                                <SelectInput
                                                    style={{ marginTop: 16 }}
                                                    source='serviceFactors[0].status'
                                                    defaultValue={serviceFactor.status}
                                                    label="وضعیت پرداخت"
                                                    choices={[
                                                        { id: 'submitted', name: 'پرداخت نشده' },
                                                        { id: 'paid', name: 'پرداخت شده' },
                                                    ]}
                                                />

                                            </GridItem>
                                        </GridContainer>;

                                        return data;
                                    })

                                    return result;
                                }
                            }
                            }
                        </FormDataConsumer>

                    </FormTab>
                </TabbedForm>
            </Edit>

            {/* <Route path="/create-segment">
                {({ match }) => ( */}
                    <Drawer
                        open={this.state.showSegmentDrawer}
                        anchor="right"
                        onClose={this.closeSegmentDrawer}
                    >
                        <ServiceSegmentCreate
                            id={this.props.id}
                            className={classes.drawerContent}
                            onCancel={this.closeSegmentDrawer}
                            onSubmit={this.onSubmit}
                            {...this.props}
                        />
                    </Drawer>
                {/* )}
            </Route> */}

        </Fragment>
    }
}

export default compose(
    connect(
        undefined,
        { push, refreshView }
    ),
    withStyles()
)(ServiceEdit);