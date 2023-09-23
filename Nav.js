import { Link } from "react-router-dom"
function Nav()
{
    return(
        <div>
             <Link to="/">Home</Link><br></br>
            <Link to="/Service">Service</Link><br></br>
            <Link to="/About">about</Link><br></br>
            <Link to="/Contact">contact</Link><br></br>
            <Link to="*"></Link><br></br>
        </div>
    )

}
export default Nav