import NoteCard from "../components/NoteCard";
import { useEffect, useState } from "react";
import Notes from "../models/Note";

export default function Home(){
    // notes
    const [notes, setNotes] = useState(() => Notes.data)


    // form state
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // limit charss
    const maxVal = 50
    const [max, setMax] = useState(maxVal)
    const [titleChars, setTitleChars] = useState(0)
    const [contentChars, setContentChars] = useState(0)
    

    function createNote(){
        // get last id from array
        const lastId = Notes.data.length > 0 ? Notes.data.slice(-1)[0]['id'] : 1

        const newNote = {
            id:lastId+1,
            title: title,
            content: content,
            archived: false
        }
        // add to local
        Notes.data.push(newNote)
        const newData = Notes.data.filter(el => el.archived == false)
        setNotes(newData)

        setTitle('')
        setContent('')
        
    }

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

    function deleteNote(id){
        const newData = notes.filter(el => el.id != id)
        
        setNotes(newData)
        Notes.data = newData
    }


    return (
        <>
        <div>
            <h3 className="text-lg mb-5 font-semibold text-slate-700">Tambah Catatan Baru</h3>
            <div className="w-6/12 bg-slate-100 rounded-lg shadow mb-10 p-5">
                <input type="text" onChange={(e)=>{
                    setTitle(e.target.value)
                    setMax(maxVal-(contentChars+titleChars))
                    setTitleChars(e.target.value.length)
                    }} className="w-full p-2 rounded bg-white mb-5" placeholder="Judul catatan" value={title} />
                <textarea rows="5" onChange={(e)=>{
                    setContent(e.target.value)
                    setMax(maxVal-(contentChars+titleChars))
                    setContentChars(e.target.value.length)
                    }} className="w-full p-2 rounded bg-white mb-2" placeholder="Catatan max 40 karakter" value={content}></textarea>
                <span className="mb-2 text-xs block text-end">Sisa karakter : {max}</span>
                <button onClick={createNote} className="w-full bg-teal-500 text-white rounded py-2">Tambah</button>
            </div>
        </div>
        <div className="w-full h-0.5 bg-slate-300 mb-10"></div>
        <div>
            <h3 className="text-lg mb-5 font-semibold text-slate-700">Catatan Aktif</h3>
            <div className="grid grid-col-1 lg:grid-cols-3 gap-3">
                {
                    notes.filter(el => el.archived == false).length == 0 ? 
                    <div className="col-span-3 bg-sky-200 rounded-lg px-10 py-5 text-center text-sky-500">
                        Tidak ada catatan
                    </div>
                    :
                    notes.filter(el => el.archived == false ).map((el, index) => {
                        return <NoteCard deleteNote={deleteNote} archiveNote={archiveNote} key={index} id={el.id} title={el.title} content={el.content.substring(0, 200)+'...'} />
                    })

                }
            </div>
        </div>
        </>
    )
}