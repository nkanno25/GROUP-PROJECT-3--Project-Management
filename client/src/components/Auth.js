import React, { useState } from 'react';
import {  } from '@mui/material';
import Auth from '../utils/auth';
import bcrypt from 'bcryptjs';
import { useMutation } from '@apollo/client';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await login({
        variables: {
            email: formState.email,
            password: formState.password,
        },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
        ...formState,
        [name]: value,
        });
    };
    
    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
            <div>
            <label htmlFor='email'>Email address:</label>
            <input type='email' name='email' onChange={handleChange} />
            </div>
            <div>
            <label htmlFor='pwd'>Password:</label>
            <input type='password' name='password' onChange={handleChange} />
            </div>
            {error ? (
            <div>
                <p className='error-text'>The provided credentials are incorrect</p>
            </div>
            ) : null}
            <div>
            <button type='submit'>Submit</button>
            </div>
        </form>
        </div>
    );
};

export default Login;