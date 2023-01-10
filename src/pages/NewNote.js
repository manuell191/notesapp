import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const NewNote = () => {
    let id = JSON.parse(localStorage.getItem('user')).id
    let authToken = JSON.parse(localStorage.getItem('authTokens')).token
    let history = useNavigate()

    let createNote = async (e) => {
        e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/api/user/${id}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`
            },
            body:JSON.stringify({'content': e.target[0].value})
        })
        let data = await response.json()

        if (response.status === 200) {
            history('/')
        } else {
            alert('Something went wrong.')
        }
    }
    return (
        <div>
            <form onSubmit={createNote}>
                <input type='text' name='content' placeholder='Type...' />
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default NewNote