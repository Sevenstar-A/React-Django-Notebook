import React, { useCallback, useEffect, useState } from 'react'
import { noteType } from '../components/Note'
import { api } from '../libs/api'

export default function useNoteList() {
    const [notes, setNotes] = useState<Array<noteType>>([])
    const [selectedNote, setSelectedNote] = useState<number>(0)
    

    useEffect(() => {
        get_notes()
    }, [])

    const get_notes = () => {
        api.get("/api/notes/")
            .then(res => {
                setNotes(res.data)
            })
            .catch(e => alert(e))
    }
    
    const handleSelect = useCallback((id:number)=>{
        setSelectedNote(selectedNote == id ? 0 : id)
    },[selectedNote])

 return [notes, selectedNote, handleSelect] 
}
