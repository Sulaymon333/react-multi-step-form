import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
    handleContinue = e => {
        e.preventDefault();
        this.props.handleNextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Please Enter User details" />
                    <TextField
                        hintText="Enter Your first Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.handleContinue} />
                </>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
};

export default FormUserDetails;
