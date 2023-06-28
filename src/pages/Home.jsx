import NoteCard from "../components/NoteCard";
import { useEffect, useState } from "react";
import Notes from "../models/Note";
import getDatetime from "../helpers/Date";

export default function Home(){
    // notes
    const [notes, setNotes] = useState(() => Notes.data)


    // form state
    const [title, setTitle] = useState('')
    const [body, setbody] = useState('')

    const [keyword, setKeyword] = useState('')

    const [valid, setValid] = useState(true)
    // limit charss
    const maxVal = 50
    const [max, setMax] = useState(maxVal)
    

    function search(){
        const newData = (keyword.length > 0) ? Notes.data.filter(el => el.title.toLowerCase().includes(keyword)) : Notes.data
        setNotes(newData)
    }

    function createNote(){
        const newNote = {
            id: +new Date(),
            title: title,
            body: body,
            archived: false,
            createdAt: getDatetime()
        }
        // add to local
        Notes.data.push(newNote)
        const newData = Notes.data.filter(el => el.archived == false)
        setNotes(newData)

        setTitle('')
        setbody('')
        setMax(maxVal)
        
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

    function validate(){
        if(title.length == 0 || body.length == 0){
             setValid(false)
        }

        else{
            if(max < 0){
                setValid(false)
            }
            else{
                setValid(true)
            }
        }
    }
    useEffect(()=>{
        validate()
    }, [max, title, body] )

    useEffect(()=>{
        search()
    }, [keyword])


    return (
        <>
        <div>
            <h3 className="text-lg mb-5 font-semibold text-slate-700">Tambah Catatan Baru</h3>
            <div className="w-6/12 bg-slate-100 rounded-lg shadow mb-10 p-5">
                <input type="text"
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    onKeyUp={() => {
                        setMax(maxVal-(body.length+title.length))
                    }}
                    className={"w-full p-2 rounded bg-white mb-5" +(!valid ? ' ring-2 ring-rose-500 focus:outline-none' : ' ring-0')} placeholder="Judul catatan" value={title} />
                <textarea rows="5"
                    onChange={(e)=>{
                        setbody(e.target.value)
                    }}
                    onKeyUp={()=>{
                        setMax(maxVal-(body.length+title.length))
                    }}
                    className={"w-full p-2 rounded bg-white mb-2" + (!valid ? ' ring-2 ring-rose-500 focus:outline-none' : ' ring-0')} placeholder="Catatan max 40 karakter" value={body}></textarea>
                {
                    (valid) ?
                    <span className={"mb-2 text-xs block text-end"}>Sisa karakter : {max}</span>
                    :
                    <span className={"mb-2 text-xs block text-end text-rose-500"}>Judul dan tidak boleh kosong & Karakter tidak boleh melebihi {maxVal}</span>
                }
                <button disabled={!valid} onClick={createNote} className={"w-full bg-teal-500 text-white hover:bg-teal-600 duration-150 rounded py-2 "+(!valid? ' cursor-not-allowed' : '')}>Tambah</button>
            </div>
        </div>
        <div className="w-full h-0.5 bg-slate-300 mb-10"></div>
        <div>
            <h3 className="text-lg mb-5 font-semibold text-slate-700">Catatan Aktif</h3>
            <div className="flex justify-end">
                <input type="text"
                onChange={(e)=>{setKeyword(e.target.value)}}
                className="rounded bg-white shadow w-4/12 px-5 py-2 mb-5 border border-slate-500" placeholder="Cari catatan" />
            </div>
            <div className="grid grid-col-1 lg:grid-cols-3 gap-3">
                {
                    notes.filter(el => el.archived == false).length == 0 ? 
                    <div className="col-span-3 bg-sky-200 rounded-lg px-10 py-5 text-center text-sky-500">
                        Tidak ada catatan
                    </div>
                    :
                    notes.filter(el => el.archived == false ).map((el, index) => {
                        return <NoteCard deleteNote={deleteNote} archiveNote={archiveNote} key={index} {...el} body={el.body.substring(0, 200)+'...'} />
                    })

                }
            </div>
        </div>
        </>
    )
}