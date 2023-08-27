import "./leftBar.scss"
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const LeftBar = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="leftBar">

            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePic} alt="" className="profilePic"/>
                        <span> {currentUser.name} </span>
                    </div>
                    <div className="menuList">
                        <span className="menuListItem">
                            <div className="Icon">
                                <PeopleIcon/>
                            </div>
                            <div className="Text">Friends</div>
                        </span>

                        <span className="menuListItem">
                            <div className="Icon">
                                <ChatBubbleTwoToneIcon/>
                            </div>
                            <div className="Text">Messages</div>
                        </span>

                        <span className="menuListItem">
                            <div className="Icon">
                                <SettingsTwoToneIcon/>   
                            </div>
                            <div className="Text">Settings</div>
                        </span> 

                    </div>
                </div>   
                <hr/>
                <div className="menu">
                    <div className="menuTitle">Explore</div>
                    <div className="menuList">

                        <span className="menuListItem">
                            <div className="Icon">
                                <EventTwoToneIcon/>
                            </div>
                            <div className="Text">Popular</div>
                        </span>

                        <span className="menuListItem">
                            <div className="Icon">
                                <Diversity3Icon/>
                            </div>
                            <div className="Text">Looking for game</div>
                        </span>

                        <span className="menuListItem">
                            <div className="Icon">
                                <SportsEsportsTwoToneIcon/>
                            </div>
                            <div className="Text">Competitions</div>
                        </span>

                        <span className="menuListItem">
                            <div className="Icon">
                                <NewspaperTwoToneIcon/>
                            </div>
                            <div className="Text">News</div>
                        </span>

                        

                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default LeftBar;

