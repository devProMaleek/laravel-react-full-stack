import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SignUp = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("submitted");
    };
    return (
        <>
            <div className="login-signup-form animated fadeInDown">
                <div className="form">
                    <form action="" className="" onSubmit={onSubmit}>
                        <h1 className="title">Create an Account for Free</h1>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            id="first_name"
                            className=""
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            id="last_name"
                            className=""
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="email"
                            className=""
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className=""
                        />
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            className=""
                        />
                        <button type="submit" className="btn btn-block">
                            Sign Up
                        </button>
                        <p className="message">
                            Registered? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

SignUp.propTypes = {};

export default SignUp;
