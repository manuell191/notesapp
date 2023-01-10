import React, { useContext, useEffect, useState } from 'react'
import NoteItem from '../components/NoteItem'

const NotesPage = () => {
    let id = JSON.parse(localStorage.getItem('user')).id
    let authToken = JSON.parse(localStorage.getItem('authTokens')).token

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/user/${id}/notes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`
            }
        })
        let data = await response.json()
        setNotes(data)
    }
    return (
        <div>
            {Object.keys(notes).map((note, index) => (
                <NoteItem key={index} note={notes[note].content} id={notes[note].id} />
            ))}
        </div>
    )
}

export default NotesPage