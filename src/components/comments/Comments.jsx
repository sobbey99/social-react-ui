import { useContext } from 'react'
import {AuthContext} from '../../context/authContext'
import './Comments.scss'

const Comments = () => {
    const {currentUser} = useContext(AuthContext)

    //TEMPORARY
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur dignissimos consequuntur, tenetur eius placeat odit expedita vel iusto?",
            name: "John Doe",
            userId: 1,
            profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur dignissimos consequuntur, tenetur eius placeat odit expedita vel iusto?",
            name: "Jane Doe",
            userId: 3,
            profilePicture: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
        },
    ]
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="profilePicutre" />
            <input type="text" placeholder='write a comment'/>
            <button>Send</button>
        </div>
        {comments.map(comment => (
            <div className="comment">
                <img src={comment.profilePicture} alt="profilePicutre" />
                <div className="infoComment">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments