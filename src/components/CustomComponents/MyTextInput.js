import {withFormsy} from 'formsy-react';
import React from 'react';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class MyTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
        const label = this.props.label;

        return (

            <FormControl style={{marginTop: '1em', display: 'flex', flexDirection: 'center',}}>
                <InputLabel >{label}</InputLabel>
                <Input value={this.props.getValue() || ''} name={this.props.name} onChange={this.changeValue}/>

                <span>{errorMessage}</span>
            </FormControl>
        );
    }
}

export default withFormsy(MyTextInput);