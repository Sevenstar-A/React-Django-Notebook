import  { useEffect, } from 'react'
import './../styles/note.css'

export type noteType = {
    id?: number;
    title: string;
    content?: string;
    created_at: string;
    author?: any;
}

export default function Note(
        { note, isSelected, noteSelector }:
        { note: noteType, isSelected: boolean, noteSelector: Function }) {
    
    const formatted_date = new Date(note.created_at).toLocaleDateString("en-US")

    
    return (
        <div className={`note-container ${isSelected ? "opened" : ""}`}>
            <div className='note-header' onClick={()=>noteSelector(note.id)}>
                <p>#{note.id} {isSelected}</p>
                <p>{note.title}</p>
                <p>{note.author}</p>
                <p>{formatted_date}</p>
                <button>Delete</button>
            </div>

            <div className="note-detail" style={{ display: isSelected ? "block" : "none" , margin:"5px 0px"}}>
                <p style={{color:"white", fontWeight:"bolder"}}>{note.title}</p>
                <textarea style={{background:"transparent", color:"white", border:"none"}} defaultValue={note.content} />
            </div>
        </div>
    )
}
