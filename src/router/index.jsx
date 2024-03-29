import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Archived from '../pages/Archived'

function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Home />} />
            <Route path="/notes/:identifier" element={<Home />} />
            <Route path="/add" element={<Home />} />
            <Route path="/archived" element={<Archived />} />
        </Routes>
    )
}

export default Router