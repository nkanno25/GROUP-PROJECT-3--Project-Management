// signup javascript file

import React, { Component } from 'react';
import { Mutation } from '@apollo/client/react/components';
import { SIGNUP_USER } from '../mutations';
import Error from './Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

class Signup extends Component {
    state = { ...initialState };

    clearState = () => {
        this.setState({ ...initialState });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event, signupUser) => {
        event.preventDefault();
        signupUser().then(async ({ data }) => {
            console.log(data);
            localStorage.setItem('token', data.signupUser.token);
            await this.props.refetch();
            this.clearState();
            this.props.history.push('/');
        });
    };

    validateForm = () => {
        const { username, email, password, confirmPassword } = this.state;
        const isInvalid =
            !username || !email || !password || password !== confirmPassword;
        return isInvalid;
    };

    render() {
        const { username, email, password, confirmPassword } = this.state;
        return (
            <div className='App'>
                <h2 className='App'>Signup</h2>
                <Mutation
                    mutation={SIGNUP_USER}
                    variables={{ username, email, password }}
                >
                    {(signupUser, { data, loading, error }) => {
                        return (
                            <form
                                className='form'
                                onSubmit={event =>
                                    this.handleSubmit(event, signupUser)
                                }
                            >
                                <input
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    value={username}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email Address'
                                    value={email}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type='password'
                                    name='confirmPassword'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={this.handleChange}
                                />
                                <button
                                    type='submit'
                                    className='button-primary'
                                    disabled={loading || this.validateForm()}
                                >
                                    Submit
                                </button>
                                {error && <Error error={error} />}
                            </form>
                        );
                    }}
                </Mutation>
            </div>
        );
    }
}