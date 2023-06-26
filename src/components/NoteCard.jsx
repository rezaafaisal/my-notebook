import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
export default function NoteCard(props){
    return (
        <div className="p-3 bg-slate-100 border shadow rounded-lg relative">
            <h3 className="text-lg font-medium text-slate-600">{props.title}</h3>
            <p className="mt-5 text-sm font-light text-justify">
                {props.content}
            </p>
            <div className="flex justify-end mt-5 gap-1 items-end">
                
                {
                    props.archived ? 
                    <button onClick={()=>props.unArchiveNote(props.id)} className="px-2 py-1 rounded bg-rose-500 text-xs text-gray-50 hover:bg-rose-600 duration-150">Hapus dari Arsip</button>
                    :
                    <button onClick={()=>props.archiveNote(props.id)} className="px-2 py-1 rounded bg-yellow-500 text-xs text-gray-50 hover:bg-yellow-600 duration-150">Arsipkan</button>
                }
                <NavLink to="/notes" className="py-1 px-2 rounded bg-teal-500 text-xs text-gray-50 hover:bg-teal-600 duration-150"> Lihat </NavLink>
            </div>
        </div>
    )
}