import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const NotePage = () => {
    let params = useParams()
    let history = useNavigate()

    let noteId = params.id
    let [note, setNote] = useState([])
    let authToken = JSON.parse(localStorage.getItem('authTokens')).token

    useEffect(() => {
        getNote()
    }, [])

    let getNote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/note/${noteId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`
            }
        })
        let data = await response.json()
        setNote(data)
    }

    let deleteNote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/note/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`
            }
        })
        if (response.status === 200) {
            history('/')
        }
    }

    return (
        <div>
            <p>{note.content}</p>
            <button onClick={deleteNote}>Delete Note</button>
        </div>
    )
}

export default NotePage