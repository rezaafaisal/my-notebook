import { getAll } from "../controller/noteController";
import NoteCard from "../components/NoteCard";
export default function Home(){
    const data = getAll()
    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-3">
            {
                data.map((el, index) => {
                    return <NoteCard key={index} title={el.title} content={el.content.substring(0, 200)+'...'} />
                })
            }
        </div>
    )
}