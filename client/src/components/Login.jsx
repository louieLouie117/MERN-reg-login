import React, {useState} from 'react'


const Login = props => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="reg-container">
            <form>

                <input 
                placeholder="email"
                onChange={e => {setEmail(e.target.value)}}
                />

                <input 
                placeholder="password"
                onChange={e => {setPassword(e.target.value)}}
                />
       
            </form>
          
        </div>
    )
}



export default Login
