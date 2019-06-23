import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
    handleBack = e => {
        e.preventDefault();
        this.props.handlePrevStep();
    };
    handleContinue = e => {
        e.preventDefault();
        // SEND FORM DATA TO THE SERVER
        this.props.handleNextStep();
    };

    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio }
        } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem primaryText="First Name" secondaryText={firstName} />
                        <ListItem primaryText="Last Name" secondaryText={lastName} />
                        <ListItem primaryText="Email" secondaryText={email} />
                        <ListItem primaryText="Occupation" secondaryText={occupation} />
                        <ListItem primaryText="City" secondaryText={city} />
                        <ListItem primaryText="Bio" secondaryText={bio} />
                    </List>
                    <br />
                    <RaisedButton label="Back" style={styles.button} onClick={this.handleBack} />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.handleContinue}
                    />
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

export default Confirm;
