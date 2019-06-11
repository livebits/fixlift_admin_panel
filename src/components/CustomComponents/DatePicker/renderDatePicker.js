import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import jMoment from 'moment-jalaali';
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import JalaliUtils from 'material-ui-pickers-jalali-utils';

jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

export default class renderDatePicker extends React.Component {

    static propTypes = {
        input: PropTypes.shape({ 
            onChange: PropTypes.func,
            value: PropTypes.string,
        }).isRequired,
        meta: PropTypes.shape({
            touched: PropTypes.bool,
            error: PropTypes.string,
        }).isRequired,
        inputValueFormat: PropTypes.string,
    };

    static defaultProps = {
        inputValueFormat: null,
    };

    state = {
        selectedDate: jMoment(),
    };

    componentWillMount() {

        if (this.props.input && this.props.input.value) {
            this.setState({
                // selectedDate: moment(this.props.input.value).format("YYYY-MM-DD")
            });
        }
    }

    handleChange = date => {
        this.setState({
            selectedDate: date._d.toISOString(),
        });
        this.props.input.onChange(date._d.toISOString());        
    }

    render() {

        const {
            meta: {touched, error},
        } = this.props;
        if (this.props.input.value) {
            var preSelected = this.state.selectedDate;
            
            return (
                <div style={{marginTop: 16, width: 256}}>
                    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
                        <div className="picker" style={{fontFamily: '"Material Icons" !important'}}>
                            <DatePicker
                                style={{width: '100%'}}
                                // clearable
                                okLabel="تأیید"
                                cancelLabel="لغو"
                                clearLabel="پاک کردن"
                                labelFunc={date => (date ? date.format('jYYYY/jMM/jDD') : '')}
                                value={preSelected ? (new Date(preSelected)).getTime() : moment()}
                                onChange={this.handleChange}
                                animateYearScrolling={false}
                            />
                        </div>
                    </MuiPickersUtilsProvider>
                    {touched &&
                    error &&
                    <span className="datepicker__error">
                        {error}
                    </span>}
                </div>
            );
        }
        else {
            return (
                <div style={{marginTop: 16, width: 256}}>
                    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
                        <div className="picker" style={{fontFamily: '"Material Icons" !important'}}>
                            <DatePicker
                                style={{width: '100%'}}
                                // clearable
                                okLabel="تأیید" 
                                cancelLabel="لغو"
                                clearLabel="پاک کردن"
                                labelFunc={date => (date ? date.format('jYYYY/jMM/jDD') : '')}
                                value={jMoment()}
                                onChange={this.handleChange}
                                animateYearScrolling={false}
                            />
                        </div>
                    </MuiPickersUtilsProvider>
                    {touched &&
                        error &&
                        <span className="datepicker__error">
                            {error}
                        </span>
                    }
                </div>
            );
        }

    }
}