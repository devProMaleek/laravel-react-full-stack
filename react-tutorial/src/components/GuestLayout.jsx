import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../Contexts/contextProvider';

const GuestLayout = props => {
    const {user, token} = useStateContext();

    if (token) {
        return <Navigate to="/" />
    }

  return (
    <>
    <div className="">
        <Outlet />
    </div>
    </>
  )
}

GuestLayout.propTypes = {

}

export default GuestLayout
