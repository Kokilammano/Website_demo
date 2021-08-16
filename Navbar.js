import { Link } from "react-router-dom";
import App from './App.css';
import Aboutmpn from './Aboutmpn';
const linkstyle={
    textDecoration:"none",
    color:"white"
};
function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/" style={linkstyle}>Home</Link></li>
                <li><Link to="/" style={linkstyle}>About us</Link>
                <div className="sub-nav">
                    <ul>
                        <li><Link to="/Aboutmpn" style={linkstyle}>About MPNMJEC</Link></li>
                        <li><Link to="/aboutfounder" style={linkstyle}>About Founder</Link></li>
                        <li><Link to="/vision" style={linkstyle}>Vision & Mission</Link></li>
                    </ul>
                </div>
                </li>
                <li><Link to="/" style={linkstyle}>Academics</Link>
                <div className="sub-nav">
                    <ul>
                        <li><Link to="/academics" style={linkstyle}>UG Courses</Link></li>
                        <li><Link to="/pgcourse" style={linkstyle}>PG Courses</Link></li>
                    </ul>
                </div>
                </li>
                <li><Link to="/" style={linkstyle}>Facilities</Link>
                    <div className="sub-nav">
                        <ul>
                            <li><Link to="/sports" style={linkstyle}>Sports</Link></li>
                            <li><Link to="/library" style={linkstyle}>Library</Link></li>
                            <li><Link to="/transport" style={linkstyle}>Transport</Link></li>
                            <li><Link to="/internet" style={linkstyle}>Internet</Link></li>
                        </ul>
                    </div>
                </li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;