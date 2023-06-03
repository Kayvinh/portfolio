import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Homepage from "./Homepage";

function RoutesList () {
    return (
        <div className="RoutesList">
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div> 
    );
}
  
export default RoutesList;