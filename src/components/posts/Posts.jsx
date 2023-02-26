import Post from "../Post/Post"
import "./Posts.scss"

const Posts = () => {

  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga!",
      img: "https://images.unsplash.com/photo-1483972117325-ce4920ff780b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fuga!",
    }
  ]
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts