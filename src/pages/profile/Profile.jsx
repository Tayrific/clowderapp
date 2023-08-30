import "./profile.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import  MoreVertIcon from '@mui/icons-material/MoreVertRounded';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";




const Profile = () => {
    return (
        <div className="profile">
           <div className="images">
                <img src="https://staticg.sportskeeda.com/editor/2022/08/8d085-16605927934948-1920.jpg" alt="" className="profileCover"/>
                <img src="https://i.scdn.co/image/ab67616d0000b273698053276e5f2b236dd2de91" alt="" className="profileImg"/>
           </div>
              <div className="profileContainer">
                    <div className="profileInfo">
                        <div className="left">
                            <a href="https://www.instagram.com/">
                                <InstagramIcon className="icon" fontSize="large"/>
                            </a>
                            <a href="https://www.facebook.com/">
                                <FacebookIcon className="icon" fontSize="large"/>
                            </a>
                            <a href="https://www.twitter.com/">
                                <TwitterIcon className="icon" fontSize="large"/>
                            </a>

                        </div>
                        <div className="center">
                            <h4 className="profileName">RandomGuy</h4>
                            <button>FOLLOW</button>

                        </div>
                        <div className="right">
                            <ChatBubbleOutlineOutlinedIcon className="icon" fontSize="large"/>
                            <MoreVertIcon className="icon" fontSize="large"/>
                        </div>

                    </div>     
            </div>


        </div>
    );
}

export default Profile;