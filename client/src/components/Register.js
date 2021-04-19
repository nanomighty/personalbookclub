import React, { useState } from 'react';
import {Link } from '@reach/router';
import axios from 'axios';

const Register = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});

    const register = (e) => {
        e.preventDefault();

        const newUser = {
            firstName, 
            lastName,
            email,
            password,
            confirmPassword,
        };
    
        axios.post('http://localhost:8000/api/user/register', 
            newUser,
            {          
                withCredentials: true
            })
                .then((res) => {
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setErrs({});
                    setConfirmReg("Thank you for registering, you can now log in!");
                })
                .catch((err) => {
                    console.log(err);
                    setErrs(err.response.data.errors);
                });
    };

    return (
        <div>
            <h5 className="font-weight-bold">Register</h5>
            {
                confirmReg? 
                <p style={{"color" : "green"}}><em>{confirmReg}</em></p>
                : null
            }
            <form onSubmit={register}>
                <div>
                    {
                        errs.firstName ?
                            <span className="error-text">{errs.firstName.message}</span> 
                            :null
                    }
                    <input type="text" 
                        name="firstName"
                        value={firstName}
                        placeholder = "First Name"
                        onChange = {(e) => setFirstName(e.target.value) }
                    />
                </div>
                <div>
                    {
                        errs.lastName ?
                            <span className="error-text">{errs.lastName.message}</span> :
                            null
                    }
                    <input type="text" 
                        name="lastName"
                        value={lastName}
                        placeholder = "Last Name"
                        onChange = {(e) => setLastName(e.target.value) }
                    />
                </div>
                <div>
                    {
                        errs.email ?
                            <span className="error-text">{errs.email.message}</span> :
                            null
                    }
                    <input type="text" 
                        name="email"
                        value={email}
                        placeholder = "Email"
                        onChange = {(e) => setEmail(e.target.value) }
                    />
                </div>
                <div>
                    {
                        errs.password ?
                            <span className="error-text">{errs.password.message}</span> :
                            null
                    }
                    <input type="password" 
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    {
                        errs.confirmPassword ?
                            <span className="error-text">{errs.confirmPassword.message}</span> :
                            null
                    }
                    <input type="password" 
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange = {(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <br />
                <div className="right">
                    <Link to={`/signin`} style={{"margin": "auto"}}>Sign In</Link> 
                    
                    <button style={{"marginLeft": "30px"}} type="submit" className="btn btn-primary">Register </button>
                </div>
            </form>
        </div>
    )
};

export default Register;