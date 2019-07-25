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

const DamageSegmentCreate = ({ id, onCancel, onSubmit, ...props }) => {

    let fakeProps = {
        basePath: `damage-segment`,
        hasCreate: false,
        hasEdit: false,
        hasList: true,
        hasShow: false,
        history: {},
        location: { pathname: `damage-segment`, search: "", hash: "", state: undefined },
        match: { path: `damage-segment`, url: `damage-segment`, isExact: true, params: {} },
        options: {},
        permissions: null,
        resource: `damage-segment`
    }
    

    return <Create title=" " {...fakeProps}>
        <SimpleForm  redirect={(basePath, id, data) => onSubmit()} toolbar={<SegmentCreateToolbar onCancel={onCancel} onSubmit={onSubmit} />}>
            <ReferenceInput label="قطعه" source="damageSegmentId" reference="segments" validate={required()}>
                <SelectInput optionText={query => `${query.name} (قیمت: ${query.price})`} />
            </ReferenceInput>

            <NumberInput label="تعداد " source="damageSegmentCount" validate={required()}/>

            <DisabledInput source="damageId" defaultValue={id} style={{display: 'none'}} />
        </SimpleForm>
    </Create>
};

export default DamageSegmentCreate;
