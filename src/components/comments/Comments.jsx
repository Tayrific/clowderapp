import { useContext } from "react";
import "./comment.scss"
import { AuthContext } from "../../context/authContext";

export const Comments = () => {
    const { currentUser } = useContext(AuthContext);
    const comments = [
        {
            id: "1",
            name: "RandomGuy",
            userId: "1",
            profilePic: "https://i.scdn.co/image/ab67616d0000b273698053276e5f2b236dd2de91",
            desc: "hehe.",

        },

        {
            id: "2",
            name: "Fati",
            userId: "2",
            profilePic: "https://staticg.sportskeeda.com/editor/2023/03/474e0-16794903651247-1920.jpg?w=840",
            desc: "wow.",
        },
    ];

    return (
        <div className="comments">
            <div className="container">
                <div className="title">Comments</div>
                <div className="addComment">
                    <img src={currentUser.profilePic} alt="" className="profilePic"/>
                    <input className="addComment__input" type="text" placeholder="Write a comment..." />
                    <button> Send </button>
                </div>
                {comments.map((comment) => (
                    <div className="comment">
                        <div className="userInfo">
                            <img src={comment.profilePic} alt="" />
                            <span className="comment__author">{comment.name}</span>
                        </div>
                        <span className="comment__desc">{comment.desc}</span>
                        <span className="comment__date ">1 hour ago</span>
                    </div>
                ))}

            </div>               
        </div>
    )
}

export default Comments
