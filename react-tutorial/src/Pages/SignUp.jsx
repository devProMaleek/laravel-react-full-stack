import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosClient from "../utils/axios-clients";
import axios from "axios";
import { useStateContext } from "../Contexts/contextProvider";

const SignUp = (props) => {
    const { setUser, setToken } = useStateContext();

    const [error, setError] = useState(null)

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        try {
            axiosClient.post(`http://127.0.0.1:8000/api/signup`, data).then((response) => {
                console.log(response)
                setUser(response.data.user);
                setToken(response.data.token);
            });
        } catch (error) {
            const response = error.response;

            if (response && response.status === 422) {
                setError(response.data.errors);


            }
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <>
            <div className="login-signup-form animated fadeInDown">
                <div className="form">
                    <form
                        action=""
                        className=""
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className="title">Create an Account for Free</h1>
                        {console.log(error)}
                        <input
                            type="text"
                            name="first_name"
                            {...register("first_name", { required: true })}
                            placeholder="First Name"
                            id="first_name"
                            className=""
                        />
                        {errors.first_name && (
                            <span style={{ color: "red" }}>
                                This field is required
                            </span>
                        )}
                        <input
                            type="text"
                            name="last_name"
                            {...register("last_name", { required: true })}
                            placeholder="Last Name"
                            id="last_name"
                            className=""
                        />
                        {errors.last_name && (
                            <span style={{ color: "red" }}>
                                This field is required
                            </span>
                        )}
                        <input
                            type="email"
                            name="email"
                            {...register("email", { required: true })}
                            placeholder="Email"
                            id="email"
                            className=""
                        />
                        {errors.email && (
                            <span style={{ color: "red" }}>
                                This field is required
                            </span>
                        )}
                        <input
                            type="password"
                            name="password"
                            {...register("password", { required: true })}
                            id="password"
                            placeholder="Password"
                            className=""
                        />
                        {errors.password && (
                            <span style={{ color: "red" }}>
                                This field is required
                            </span>
                        )}
                        <input
                            type="password"
                            name="password_confirmation"
                            {...register("password_confirmation", {
                                required: true,
                                validate: (value) => {
                                    if (watch("password") != value) {
                                        return "Your passwords do no match";
                                    }
                                },
                            })}
                            id="password_confirmation"
                            placeholder="Confirm Password"
                            className=""
                        />
                        {errors.password_confirmation && (
                            <span style={{ color: "red" }}>
                                {errors.password_confirmation?.message}
                            </span>
                        )}
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
