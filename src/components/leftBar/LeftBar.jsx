import "./leftBar.scss"
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';


const LeftBar = () => {
    return (
        <div className="leftBar">

            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top" alt="" className="profilePic"/>
                        <span> Tay </span>
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

