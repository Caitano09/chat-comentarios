import React, {useState} from "react"

const NewComment =(props) =>{

    const [newComment, setNewComment] = useState('')

    const handleChange = (event) =>{
        setNewComment(event.target.value)
      }

    const sendComment = () =>{
        props.sendComment(newComment)
        setNewComment('')
    }

    return(
      <div>
        <textarea value={newComment} onChange={handleChange}></textarea>
        <button onClick={sendComment}>Enviar</button>
      </div>
    )
}

export default NewComment