import React from 'react';
import {
    Create,
    DisabledInput,
    SimpleForm,
    required,
    SaveButton,
    Toolbar,
    translate,
    ReferenceInput,
    SelectInput,
    NumberInput
} from 'react-admin';
import Button from '@material-ui/core/Button';

const SegmentCreateToolbar = translate(({ onCancel, onSubmit, translate, ...props }) => (
    <Toolbar {...props}>
        <SaveButton onSaved={onSubmit}/>
        <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
    </Toolbar>
));

const ServiceSegmentCreate = ({ id, onCancel, onSubmit, ...props }) => {

    let fakeProps = {
        basePath: `service-segment`,
        hasCreate: false,
        hasEdit: false,
        hasList: true,
        hasShow: false,
        history: {},
        location: { pathname: `service-segment`, search: "", hash: "", state: undefined },
        match: { path: `service-segment`, url: `service-segment`, isExact: true, params: {} },
        options: {},
        permissions: null,
        resource: `service-segment`
    }
    

    return <Create title=" " {...fakeProps}>
        <SimpleForm  redirect={(basePath, id, data) => onSubmit()} toolbar={<SegmentCreateToolbar onCancel={onCancel} onSubmit={onSubmit} />}>
            <ReferenceInput label="قطعه" source="serviceSegmentId" reference="segments" validate={required()}>
                <SelectInput optionText={query => `${query.name} (قیمت: ${query.price})`} />
            </ReferenceInput>

            <NumberInput label="تعداد " source="ServiceSegmentCount" validate={required()}/>

            <DisabledInput source="serviceId" defaultValue={id} style={{display: 'none'}} />
        </SimpleForm>
    </Create>
};

export default ServiceSegmentCreate;
