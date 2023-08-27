import { Post } from "../post/Post";
import "./posts.scss"

const Posts = () => {

    const posts = [

        {
            id: "1",
            name: "Luffy",
            userId: "1",
            profilePic: "https://i.scdn.co/image/ab67616d0000b273698053276e5f2b236dd2de91",
            desc: "Love for all, Hatred for none.",
            photo: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhcnRzfGVufDB8fDB8fHww&w=1000&q=80",
            date: "5 mins ago",
        },
        {
        id: "2",
        name: "Nami",
        userId: "2",
        profilePic: "https://staticg.sportskeeda.com/editor/2023/03/474e0-16794903651247-1920.jpg?w=840",
        desc: "xx.",
        photo: "https://wholesale.methodicalcoffee.com/cdn/shop/articles/cafe.webp?v=1673986032",
        date: "15 mins ago",
        },
    ]
    return <div className="posts">

            {posts.map(post=> (
                <Post post ={post} key={post.id}/>
                ))
            }

                        
        </div>
    
}

export default Posts;