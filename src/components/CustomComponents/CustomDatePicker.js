import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addField, FieldTitle } from 'ra-core';
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
// import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
// import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
// import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import JalaliUtils from 'material-ui-pickers-jalali-utils';

const makePicker = (PickerComponent) => {
  class _makePicker extends Component {
    onChange(date) {
      this.props.input.onChange(date);
      this.props.input.onBlur();
    }

    render() {
      const {
        input,
        options,
        label,
        source,
        resource,
        isRequired,
        className,
        meta,
        type,
        providerOptions,
      } = this.props;

      const { touched, error } = meta;

      return (
        <div className="picker">
          <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
          <div>
            <PickerComponent
              okLabel="تأیید"
              cancelLabel="لغو"
              clearLabel="پاک کردن"
              {...options}
              label={<FieldTitle
                label={label}
                source={source}
                resource={resource}
                isRequired={isRequired}
              />}
              margin="normal"
              error={!!(touched && error)}
              helperText={touched && error}
              ref={(node) => { this.picker = node; }}
              className={className}
              labelFunc={date => (date ? type === "date" ? date.format('jYYYY/jMM/jDD') : date.format('jYYYY/jMM/jDD HH:mm:ss') : '')}
              value={input.value ? input.value : null}
              onChange={date => this.onChange(date)}
            />
            </div>
          </MuiPickersUtilsProvider>
        </div>
      );
    }
  }
  _makePicker.propTypes = {
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    labelTime: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    providerOptions: PropTypes.shape({
      // utils: PropTypes.func,
      locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  };

  _makePicker.defaultProps = {
    input: {},
    isRequired: 'false',
    label: '',
    meta: { touched: false, error: false },
    options: {},
    resource: '',
    source: '',
    labelTime: '',
    className: '',
    type: 'date',
    providerOptions: {
      // utils: DateFnsUtils,
      locale: undefined,
    },
  };
  return _makePicker;
};

export const CustomDateInput = addField(makePicker(DatePicker));
export const CustomTimeInput = addField(makePicker(TimePicker));
export const CustomDateTimeInput = addField(makePicker(DateTimePicker));