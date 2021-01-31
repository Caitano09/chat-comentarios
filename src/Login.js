import React, {useState} from "react"

const Login = (props) =>{

    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')

    const handleChange = field => (event) =>{

        if(field === 'email'){
            setEmail(event.target.value)
        }else if(field === 'passwd'){
            setPasswd(event.target.value)
        }

      }

      const login = () =>{
        props.login(email, passwd)        
      }
      const errorMessages = {
          'auth/wrong-password': 'Email e/ou Senha inválidos',
          'auth/user-not-found': 'Usuário não encontrado',
          'auth/invalid-email': 'Email inválido'
      }

    return(
        <div>
            <h4>Entre para comentar:</h4>
            <form className='form-inline'>                
                <input type="text" className='form-control mr-1' onChange={handleChange('email')} placeholder="email"/>
                <input type="password" className='form-control mr-1' onChange={handleChange('passwd')} placeholder="senha"/>
                <button className='btn btn-primary' type="button" onClick={login}>Entrar</button>
                <button className='btn' onClick={()=> props.changeScreen('signup')}>Criar Conta</button>
            </form>
            {props.isAuthError && 
                <div className='card text-white bg-danger mt-3'> 
                    <div className='card-header'>Erro ao Entrar</div>
                    <div className='card-body'>
                        {errorMessages[props.authError]}                             
                    </div>
                </div>
            }
        </div>
    )
}

export default Login