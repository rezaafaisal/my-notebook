import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'

function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Home />} />
            <Route path="/notes/:identifier" element={<Home />} />
            <Route path="/add" element={<Home />} />
            <Route path="/archived" element={<Home />} />
        </Routes>
    )
}

export default Router