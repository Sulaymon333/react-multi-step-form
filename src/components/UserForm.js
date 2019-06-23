import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    // handle next step
    handleNextStep = () => {
        this.setState({ step: this.state.step + 1 });
    };

    // handle previous step
    handlePrevStep = () => {
        this.setState({ step: this.state.step - 1 });
    };

    // handle input change
    handleChange = input => e => {
        const { value } = e.target;
        this.setState({
            [input]: value
        });
    };
    render() {
        const { step, firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        handleNextStep={this.handleNextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 2:
                return (
                    <FormPersonalDetails
                        handlePrevStep={this.handlePrevStep}
                        handleNextStep={this.handleNextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return <Confirm handlePrevStep={this.handlePrevStep} handleNextStep={this.handleNextStep} />;
            case 4:
                return <Success />;
        }
    }
}

export default UserForm;
