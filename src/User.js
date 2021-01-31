const User = props =>{
    return(
        <div>
            Logado com: {props.email}
            <button onClick={props.logout}>Sair</button>
        </div>
    )
}

export default User