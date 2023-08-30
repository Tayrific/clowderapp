import "./rightBar.scss"

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span className="title">Online Friends</span>

                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.scdn.co/image/ab67616d0000b273698053276e5f2b236dd2de91" alt="" className="profilePic"/>
                            <div className="online" />
                            <span> RandomGuy </span>
                        </div>
                        <div className="buttons">
                            <button className="btn">Message</button>
                            <button className="btn">View Profile</button>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="https://staticg.sportskeeda.com/editor/2023/03/474e0-16794903651247-1920.jpg?w=840" alt="" className="profilePic"/>
                            <div className="online" />
                            <span> Fati </span>
                        </div>
                        <div className="buttons">
                            <button className="btn">Message</button>
                            <button className="btn">View Profile</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <span className="title">Suggested for you</span>

                    <div className="user">
                        <div className="userInfo">
                            <img src="https://staticg.sportskeeda.com/editor/2023/03/474e0-16794903651247-1920.jpg?w=840" alt="" className="profilePic"/>
                            <span> Fati </span>
                        </div>
                        <div className="buttons">
                            <button className="btn">Add Friend</button>
                            <button className="btn">Dismiss</button>
                        </div>
                    </div>
                </div>   

                          

            </div>
            
        </div>
    );
}

export default RightBar;