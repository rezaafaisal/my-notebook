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

    function deleteNote(id){
        const newData = notes.filter(el => el.id != id)
        
        console.log(newData)
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
        <div>
            <h3 className="text-lg mb-5 font-semibold text-slate-700">Arsip Catatan</h3>
            <div className="grid grid-col-1 lg:grid-cols-3 gap-3">
                {
                    notes.filter(el => el.archived == true).length == 0 ? 
                    <div className="col-span-3 bg-yellow-200 rounded-lg px-10 py-5 text-center text-yellow-500">
                        Tidak ada arsip catatan
                    </div>
                    :
                    notes.filter(el => el.archived == true).map((el, index) => {
                        return <NoteCard deleteNote={deleteNote} unArchiveNote={unArchiveNote} key={index} {...el} body={el.body.substring(0, 200)+'...'} />
                    })
                }
            </div>

        </div>
    )
}