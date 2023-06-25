import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
export default function NoteCard(props){


    // const [showOption, setShowOption] = useState()

    // if(showOption){
    //     alert('berhasil')
    // }

    // useEffect(() => {
    //     s
    // })
    return (
        <div className="p-3 bg-slate-100 border shadow rounded-lg relative">
            <button type="button" className="text-slate-400 absolute right-0 px-3"><FontAwesomeIcon icon={faEllipsis} size="lg" /></button>
            <h3 className="text-lg font-medium text-slate-600">{props.title}</h3>
            <p className="mt-5 text-sm font-light text-justify">
                {props.content}
            </p>
            <div className="flex justify-end mt-5">
                <NavLink to="/notes" className="py-2 px-6 rounded bg-teal-500 text-xs text-gray-50 hover:bg-teal-600 duration-150"> Lihat </NavLink>
            </div>
        </div>
    )
}