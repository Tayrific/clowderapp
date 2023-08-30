import { Link } from "react-router-dom";
import "./post.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Comments from "../comments/Comments";
import { useState } from "react";


export const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false)

    const liked = false;


    const shareHandler = () => {
        console.log("share")
    }


  return (
    <div className='post'>
        <div className="container">
            <div className="user">
                <div className="userInfo">                    
                    <img src={post.profilePic} alt="" />
                    <div className= "details">

                        <Link to={`/profile/${post.userId}`} style = {{textDecoration:"none", color:"inherit"}}>
                            <span className="name">{post.name}</span>    
                        </Link>

                        <span className="date">{post.date}</span>
                    </div>
                </div>
                <MoreVertOutlinedIcon/>
            </div>

            <div className="postContent"> 
                <span className="desc">{post.desc}</span>
                <img src={post.photo} alt="" className="photo"/>
            </div>

            <div className="info"> 
                <div className="item">
                    {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                    <span className="likeCounter"> 99  </span>       
                </div>
                <div className="item"> 
                    <ModeCommentOutlinedIcon onClick={()=> setCommentOpen(!commentOpen)}/>
                    <span className="commentCounter"> 2  </span>                
                </div>
                <div className="item">
                    <ShareOutlinedIcon onClick={shareHandler}/> 
                    <span className="shareCounter"> 12  </span>                
                </div>
            </div>
            <div className="commentSection">
            {commentOpen && <Comments className=""/>}
            </div>

        </div>
    </div>
  )
}

export default Post