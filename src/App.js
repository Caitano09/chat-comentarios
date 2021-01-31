import React, {useState, useEffect} from "react";
import Comments from './Comments';
import NewComment from './NewComment';
import Login from './Login'
import SignUp from './SignUp'
import User from './User'
import 'bootstrap-css-only'

function App(props) {

  const [comments, setComment] = useState({})
  const [loading, setLoading] = useState(false)
  const [auth, setAuth] = useState(false)
  const [authError, setAuthError] = useState('')
  const [isAuthError, setIsAuthError] = useState(false)
  const [signUpError, setSignUpError] = useState('')
  const [isSignUpError, setIsSignUpError] = useState(false)
  const [user, setUser] = useState({})
  const [userScreen, setUserScreen] = useState('login')
    
  const sendComment = (comment) =>{
    const id = props.database.ref().child('comments').push().key
    const comments = {}
    comments['comments/'+id] = {
      comment, 
      email: user.email,
      userId: user.uid
    }

    props.database.ref().update(comments)
  }

  const login = async (email, passwd) =>{
    setIsAuthError(false)
    setAuthError('')
    try{
      await props.auth.signInWithEmailAndPassword(email, passwd)
    }catch(err){
      setAuthError(err.code)
      setIsAuthError(true)
    }
  }

  const createAccount = async (email, passwd) =>{
    setIsSignUpError(false)
    setSignUpError('')
    try{
      await props.auth.createUserWithEmailAndPassword(email, passwd)
    }catch(err){
      setSignUpError(err.code)
      setIsSignUpError(true)
    }
  }

  useEffect(() => {
    async function loadComments() {
      setLoading(true)
      const response = await props.database.ref('comments');
      response.on('value', comment =>{
        setComment(comment.val())
        setLoading(false)
      })
      props.auth.onAuthStateChanged(usuario =>{
        if(usuario){
          setAuth(true)  
          setUser(usuario)        
        }else{
          setAuth(false)  
          setUser({})            
        }
      })
    }
    loadComments();
  }, []);

  const logout = () =>{
   props.auth.signOut()
  }

  const changeScreen = (screen) =>{
    setUserScreen(screen)
  }

  return (
    <div className='container mt-3'>
      {auth && <User email={user.email} logout={logout}/>}

      {!auth 
        && userScreen === 'login' &&
        <Login login={login} isAuthError={isAuthError} authError={authError} changeScreen={changeScreen}/>
      }
      {!auth 
        && userScreen === 'signup' &&
        <SignUp createAccount={createAccount} isSignUpError={isSignUpError} signUpError={signUpError} changeScreen={changeScreen}/>
       }
       {!auth}

      {auth && <NewComment sendComment={sendComment}/>}      
      <Comments comments={comments}/>
      {
        loading && <p>Carregando...</p>
      }

    </div>
  );
}

export default App;
