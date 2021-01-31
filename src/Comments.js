import Comment from './Comment'

const Comments = (props/*ou use destructing assign = {comments} */) =>{
  const keys = Object.keys(props.comments)
  return(
    <div>
      {keys.map(key => <Comment key={key} comment={props.comments[key]}/>)}
    </div>
  )
}

export default Comments