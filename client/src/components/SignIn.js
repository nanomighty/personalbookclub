import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const SignIn = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errs, setErrs] = useState("");

    const signin = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:8000/api/user/login', {          
            email,
            password,
        },
        {
            withCredentials: true
        })
            .then((res) => {
                navigate("/dashboard");
            })
            .catch((err) => {
                console.log(err);
                setErrs(err.response.data.msg);
            })
    };

    return (
        <div>
            <h5 className="font-weight-bold">Sign In</h5>
            <p className="error-text">{errs? errs : ""}</p>
            <form onSubmit={signin}>
                <div>
                    <input type="text" 
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange = {(e) => setEmail(e.target.value) }
                    />
                </div>
                <div>
                    <input type="password" 
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <div className="right">
                    <Link to={`/register`} style={{"margin": "auto"}}>Create Account</Link>
                    <button style={{"marginLeft": "30px"}} type="submit" className="btn btn-primary">SignIn </button>
                </div>
            </form>
        </div>
    )
};

export default SignIn;