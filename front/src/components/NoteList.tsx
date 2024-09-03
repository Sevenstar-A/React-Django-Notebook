import React from 'react'
import Note, { noteType } from './Note'
import useNoteList from '../customHooks/noteListHook'


export default function NoteList() {

    const [notes, selectedNote, handleSelect]= useNoteList()
    
    return (
        <div className='parent'>
            <div className='note-list-div'>
                {notes.map((note) => {
                    return <Note note={note} isSelected={selectedNote==note.id} noteSelector={handleSelect} key={note.id} />
                })}
            </div>
        </div>
    )
}
