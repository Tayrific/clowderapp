import { Link } from "react-router-dom";
import "./post.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


export const Post = ({post}) => {
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
            <div className="info"> </div>
        </div>
    </div>
  )
}

export default Post