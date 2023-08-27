import "./navbar.scss"

//import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
//import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
//import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className = "left" >

                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">CLOWDER</span>
                </Link>  
                <div className="searchBar">
                    <SearchOutlinedIcon className="searchIcon"/>
                    <input type="text" placeholder="Search for friends, posts or videos" className="searchInput"/>
                </div>
            </div>

            <div className="right">
  
                <ChatBubbleOutlineOutlinedIcon className="icon"/>
                <NotificationsOutlinedIcon className="icon"/>
                {darkMode ? (
                    <LightModeOutlinedIcon onClick={toggle} />
                    ) : (
                    <NightsStayOutlinedIcon onClick={toggle} />
                    )}
                <div className="user">
                    <img src={currentUser.profilePic} alt="" className="profilePic"/>
          
                </div>
            </div>


        

        </div>
    );
}

export default Navbar;