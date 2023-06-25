import {Notes as notes}  from "../models/Note";

let Notes = notes

function getAll(){
    return Notes
}

function find(id){

    const note = Notes.filter((val) => {
        return val.id == id
    })
    return note
}

function archive(id){
    Notes.forEach((note, index) => {
        if(note.id == id){
            Notes[index].archived = true
        }
    });
}

function removeArchive(id){
    Notes.forEach((note, index) => {
        if(note.id == id){
            Notes[index].archived = false
        }
    });
}

export {getAll, find, archive, removeArchive}