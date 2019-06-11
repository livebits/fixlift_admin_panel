import React, {Component} from 'react';
import {Labeled} from 'react-admin'
import {Field} from 'redux-form';
import renderDatePicker from './renderDatePicker'
import moment from "moment" 

class ReactAdminJalaliDateInput extends Component {

    render() {
        return <Field
                name={this.props.source}
                placeholderText={this.props.label}
                inputValueFormat="YYYY-MM-DD"
                dateFormat="L"
                dateFormatCalendar="dddd"
                fixedHeight
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                normalize={value => (value ? moment.unix(value).format('YYYY-MM-DD') : null)}
                component={renderDatePicker}
            />
    }
}

export default ReactAdminJalaliDateInput;