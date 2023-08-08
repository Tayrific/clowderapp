import "./navbar.scss"
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
//import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
//import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
//import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className = "left" >

                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">CLOWDER</span>
                </Link>

                <CottageOutlinedIcon className="icon"/>
                <NightsStayOutlinedIcon className="icon"/>


                <div className="searchBar">
                    <SearchOutlinedIcon className="searchIcon"/>
                    <input type="text" placeholder="Search for friends, posts or videos" className="searchInput"/>
                </div>
            </div>

            <div className="right">
  
                <ChatBubbleOutlineOutlinedIcon className="icon"/>
                <NotificationsOutlinedIcon className="icon"/>
                <div className="user">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top" alt="" className="profilePic"/>
                </div>
            </div>


        

        </div>
    );
}

export default Navbar;