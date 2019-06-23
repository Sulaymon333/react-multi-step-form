import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = () => {
    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Confirm User Data" />
                <h1>Thank you for Signing up!</h1>
                <p>Please continue with further instructions from your Email.</p>
            </>
        </MuiThemeProvider>
    );
};

export default Success;
