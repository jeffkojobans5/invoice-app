import { useState , useContext } from 'react'
import { UserContext } from '../EditContexts/UserContext'

function SignIn () {
    return (
    <div className="tab-pane fade show active">
        <div className="form px-4 pt-5"> 
            <input type="text" name="" className="form-control" placeholder="Email or Phone" /> 
            <input type="password" name="" className="form-control" placeholder="Password" /> 
        <button className="btn btn-dark btn-block">Login</button> </div>
    </div>        
    )
}

function Register () {
    const { userDetails , handleRegister , submit } = useContext(UserContext)

    return (
    <div className="mt-4">
        <div className="form px-4"> 
            <input type="text" 
                name="username" 
                value={userDetails.username} 
                onChange={(e)=>handleRegister(e)} 
                className="form-control" 
                placeholder="Name" /> 
            <input type="text" 
                name="email" 
                value={userDetails.email} 
                onChange={(e)=>handleRegister(e)} 
                className="form-control" 
                placeholder="Email"/> 
            <input type="password" 
                name="password" 
                value={userDetails.password} 
                onChange={(e)=>handleRegister(e)} 
                className="form-control" 
                placeholder="Password"/> 
            <button className="btn btn-dark btn-block" onClick={submit}>Signup</button> </div>
    </div>      
    )
}

function Login () {
    const [signUp , setSignUp] = useState(false);


    function toLogin () {
        setSignUp(false);
    }

    function toRegister () {
        setSignUp(true);
    }    
     return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item text-center" onClick={toLogin}> <a className={ signUp ? "nav-link btl " : "nav-link btl active" }> Sign Up</a> </li>
                        <li className="nav-item text-center" onClick={toRegister}><a className={ signUp ? "nav-link btl active" : "nav-link btl" }> Login</a></li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        { signUp ? <SignIn /> : null }
                        { signUp ?  null : <Register />  }
                    </div>
                </div>
            </div>          
        </>
    )
}

export default Login