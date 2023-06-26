import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import Notes from "../models/Note";


export default function Archived(){
    // life cycle hook
    const [notes, setNotes] = useState(() => Notes.data)
    
    function unArchiveNote(id){
        const newData = notes.map((el)=>{
            if(el.id == id){
                return {
                    ...el,
                    archived: false
                }
            }
            return el
        })

        setNotes(newData)
        Notes.data = newData 
    }
    
    useEffect(()=>{
        console.log('notes terupdate');
    }, [])

    // useMemo()
    // useContext
    // spread operator
    // actionHook
    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-3">
            {
                notes.filter(el => el.archived == true).map((el, index) => {
                    return <NoteCard unArchiveNote={unArchiveNote} key={index} {...el} content={el.content.substring(0, 200)+'...'} />
                })
            }
        </div>
    )
}