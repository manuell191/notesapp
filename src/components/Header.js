import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let authToken = localStorage.getItem('authTokens')
    let id = JSON.parse(localStorage.getItem('user')).id
    let {logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Link to='/'>Notes</Link>
            <span> | </span>
            <Link to={`/note`}>NewNote</Link>
            {
                authToken !== null ? (
                    <p onClick={logoutUser}>Logout</p>
                ) : (
                    <Link to='/login'>Login</Link>
                )
            }
        </div>
    )
}

export default Header