import React from "react";
import PropTypes from "prop-types";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Contexts/contextProvider";

const DefaultLayout = (props) => {
    const { user, token } = useStateContext();
    console.log(token);
    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogOut = (event) => {
        event.preventDefault();
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("user");
        window.location.reload();
    };
    return (
        <>
            <div className="" id="defaultLayout">
                <aside>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/users">Users</Link>
                </aside>
                <div className="content">
                    <header className="">
                        <div className="">Header</div>
                        <div className="">
                            {user.name}
                            {console.log(user)}
                            <a href="#" onClick={onLogOut} className="btn-logout">Logout</a>
                        </div>
                    </header>
                    <main className="">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
