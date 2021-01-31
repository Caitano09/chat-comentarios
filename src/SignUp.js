import React, {useState} from "react"

const SignUp = (props) =>{

    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')

    const handleChange = field => (event) =>{

        if(field === 'email'){
            setEmail(event.target.value)
        }else if(field === 'passwd'){
            setPasswd(event.target.value)
        }

      }

      const createAccount = () =>{
        props.createAccount(email, passwd)        
      }
      const errorMessages = {
          'auth/email-already-in-use': 'Email já foi utilizado',
          'auth/weak-password': 'senha muito fraca',
          'auth/invalid-email': 'Email inválido'
      }

    return(
        <div>
            <h4>Criar Conta</h4>
            <form className='form-inline'>
                <input type="text" className='form-control mr-1' onChange={handleChange('email')} placeholder="email"/>
                <input type="password" className='form-control mr-1' onChange={handleChange('passwd')} placeholder="senha"/>
                <button type="button" className='btn btn-primary' onClick={createAccount}>Criar Conta</button>
                <button className='btn' onClick={()=> props.changeScreen('login')}>Já tenho uma conta, entrar</button>
            </form>
            {props.isSignUpError && 
                <div className='card text-white bg-danger mt-3'> 
                    <div className='card-header'>Erro ao criar nova conta</div>
                    <div className='card-body'> 
                        {errorMessages[props.signUpError]} 
                    </div>                    
                </div>                    
            }
        </div>
    )
}

export default SignUp