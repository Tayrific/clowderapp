import "./rightBar.scss"

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span className="title">Online Friends</span>

                    <div className="user">
                        <div className="userInfo">
                            <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top" alt="" className="profilePic"/>
                            <div className="online" />
                            <span> Tay </span>
                        </div>
                        <div className="buttons">
                            <button className="btn">Message</button>
                            <button className="btn">View Profile</button>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top" alt="" className="profilePic"/>
                            <div className="online" />
                            <span> Tay </span>
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
                            <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top" alt="" className="profilePic"/>
                            <span> Tay </span>
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