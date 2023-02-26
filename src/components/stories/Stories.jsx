import {AuthContext} from '../../context/authContext'
import { useContext } from "react"
import "./Stories.scss"

const Stories = () => {
    const {currentUser} = useContext(AuthContext)

    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.unsplash.com/photo-1438557068880-c5f474830377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://images.unsplash.com/photo-1438557068880-c5f474830377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.unsplash.com/photo-1438557068880-c5f474830377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
        },
        {
            id: 4,
            name: "John Doe",
            img: "https://images.unsplash.com/photo-1438557068880-c5f474830377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
        },
    ]
  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.profilePic} alt="storyImg" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story =>(
            <div className="story">
                <img src={story.img} alt="storyImg" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories