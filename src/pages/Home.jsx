import NoteCard from "../components/NoteCard";
import { useEffect, useState } from "react";
import Notes from "../models/Note";

export default function Home(){
    
    const [notes, setNotes] = useState(() => Notes.data)

    function archiveNote(id){
        const newData = notes.map((el)=>{
            if(el.id == id){
                return {
                    ...el,
                    archived: true
                }
            }
            return el
        })

        setNotes(newData)
        Notes.data = newData 
    }


    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-3">
            {
                notes.filter(el => el.archived == false ).map((el, index) => {
                    return <NoteCard archiveNote={archiveNote} key={index} id={el.id} title={el.title} content={el.content.substring(0, 200)+'...'} />
                })
            }
        </div>
    )
}