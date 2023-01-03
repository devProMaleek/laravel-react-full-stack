import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Login = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("submitted");
    };
    return (
        <>
            <div className="login-signup-form animated fadeInDown">
                <div className="form">
                    <form action="" className="" onSubmit={onSubmit}>
                        <h1 className="title">Login into your account</h1>
                        <input
                            type="email"
                            name=""
                            email
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
                        <button type="submit" className="btn btn-block">
                            Login
                        </button>
                        <p className="message">
                            Not registered?{" "}
                            <Link to="/signup">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

Login.propTypes = {};

export default Login;
