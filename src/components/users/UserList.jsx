import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';
import moment from "jalali-moment";
import * as Number from "../CustomComponents/Number";

const FullNameField = ({ record = {} }) => (
    <span>
        {record.firstName ? record.firstName : ''}{' '}
        {record.lastName ? record.lastName  : ''}
    </span>
);
FullNameField.defaultProps = { label: 'نام کاربر' };

const LastLoginDate = ({ record = {} }) => (
    <span>
        {record.lastLogin && record.lastLogin !== null ?
            <div>
                {Number.number(
                    moment(record.lastLogin, "YYYY/MM/DD")
                        .locale("fa")
                        .format("YYYY/MM/DD")
                )}
                <br />
                {Number.number(
                    moment(record.lastLogin, "YYYY/M/D HH:mm")
                        .locale("fa")
                        .format("HH:mm")
                )}
            </div>
            :
            <div/>
        }
    </span>
);
LastLoginDate.defaultProps = { label: 'آخرین ورود' };

export const UserList = props => (
    <List {...props} title='مدیریت کاربران' >

        <Datagrid rowClick='edit'>
            <TextField source='id' label='کد کاربر' />
            <FullNameField />
            <TextField source='username' label='نام کاربری' />
            <LastLoginDate />
            <TextField source='role' label='نقش' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);