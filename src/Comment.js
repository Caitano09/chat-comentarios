const Comment =  (props) =>{
  let email = 'desconhecido'
  if(props.comment){
    if(props.comment.email){
      email = props.comment.email
    }
  }
  return(
    <div className='card mt-2'>  
      <div className='card-body'>    
        {props.comment.comment} <br/> 
        <span className='text-muted'>Enviado por: {email}</span>
      </div>
    </div>
  )
}

export default Comment