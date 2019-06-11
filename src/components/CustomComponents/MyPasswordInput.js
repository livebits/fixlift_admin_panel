import {withFormsy} from 'formsy-react';
import React from 'react';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

class MyPasswordInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        this.props.setValue(event.currentTarget.value);
    }

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    };

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
        const label = this.props.label;

        return (

            <FormControl style={{marginTop: '1em', display: 'flex', flexDirection: 'center',}}>
                <InputLabel>{label}</InputLabel>
                <Input value={this.props.getValue() || ''} name={this.props.name}
                       type={this.state.showPassword ? 'text' : 'password'}
                       onChange={this.changeValue} endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                            >
                                {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                }/>

                <span>{errorMessage}</span>
            </FormControl>
    );
    }
}

export default withFormsy(MyPasswordInput);