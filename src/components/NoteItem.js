import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note, id}) => {
  return (
    <Link to={`/note/${id}`}>
        <div>
            <h3>{note}</h3>
        </div>
    </Link>
  )
}

export default NoteItem