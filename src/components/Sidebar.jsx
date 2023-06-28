import meow from '../assets/meow.jpg'
import { NavLink } from 'react-router-dom'
export default function Sidebar(){
    return (
        <aside className="w-3/12 h-full bg-slate-100 fixed p-7">
            {/* navbar header */}
            <div className="">
                <img src={meow} className='rounded-full w-20 h-20 ring-4 ring-offset-2 ring-teal-500' />
                <span className="block mt-5 text-slate-700 font-medium text-lg">Miauuw</span>
            </div>
            <div className='w-full h-0.5 bg-slate-500 my-7'></div>
            <ul className='grid gap-3'>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active-nav' : 'nav-item inactive-nav')}>Semua Catatan</NavLink>
                </li>
                <li>
                    <NavLink to="/archived" className={({ isActive }) => (isActive ? 'nav-item active-nav' : 'nav-item inactive-nav')}>Arsip Catatan</NavLink>
                </li>
            </ul>
        </aside>
    )
}