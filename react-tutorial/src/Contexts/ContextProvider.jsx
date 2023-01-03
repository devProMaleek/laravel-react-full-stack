import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";

const state = {
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
};
const StateContext = createContext(state);

const ContextProvider = (props) => {
    const initialToken = localStorage.getItem("ACCESS_TOKEN");
    const initialUserInfo = {name: 'Abdulmalik'}
    const [user, setUser] = useState(initialUserInfo);
    const [token, _setToken] = useState(null);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };
    return (
        <>
            <StateContext.Provider value={{user, token, setUser, setToken}}>
                {props.children}
            </StateContext.Provider>
        </>
    );
};

ContextProvider.propTypes = {};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
