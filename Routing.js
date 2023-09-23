import { Route,Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import PageNotFound from "./PageNotFound";

function Routing()
{
    return(
        <div>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Service" element={<Service></Service>}></Route>
                <Route path="/About" element={<About></About>}></Route>
                <Route path="/Contact" element={<Contact></Contact>}></Route>
                <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </div>
    )
}

export default Routing