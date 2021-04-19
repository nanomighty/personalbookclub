import React from 'react';
import { navigate } from '@reach/router';

const Home = (props) => {
    return (
        <div className="center">
            <div >
                <button className="btn btn-primary" onClick = {() => navigate(`/register`)}>Register</button>
                <button className="btn btn-primary" onClick = {() => navigate(`/signin`)}>Sign In</button>
            </div>
            <hr />
            <div style={{"display":"flex", "justify-content" : "center",}}>
                <img src="assets/Cover1.jpg" alt="You are a badass" /> 
                <img src="assets/Cover2.jpg" alt="Atomic Habits" /> 
                <img src="assets/Cover14.jpg" alt="The Girl with the Louding Voice" />
                <img src="assets/Cover15.jpg" alt="Cringeworthy" />
                <img src="assets/Cover6.jpg" alt="Dear Girls" />
                <img src="assets/Cover18.jpg" alt="Queenie" /> 
            </div>
            <div style={{"display":"flex", "justify-content" : "center",}}>
                <img src="assets/Cover7.jpg" alt="Grittypants" /> 
                <img src="assets/Cover8.jpg" alt="The Proposal" /> 
                <img src="assets/Cover9.jpg" alt="Breath" />
                <img src="assets/Cover10.jpg" alt="Happily Ever Afters" />
                <img src="assets/Cover12.jpg" alt= "Thinking, Fast and Slow"/>
                <img src="assets/Cover5.jpg" alt="The Four Agreements" />   
            </div>
            <div style={{"display":"flex", "justify-content" : "center",}}>
                <img src="assets/Cover13.jpg" alt="Happiness Advantage" /> 
                <img src="assets/Cover3.jpg" alt="Yes Please" />
                <img src="assets/Cover4.jpg" alt="True Love" />
                <img src="assets/Cover16.jpg" alt="Lean In" />
                <img src="assets/Cover17.jpg" alt= "The Wangs vs. the world"/>
                <img src="assets/Cover11.jpg" alt="Crazy Rich Asians" />
            </div>
            <hr />
        </div>
    )
};

export default Home;