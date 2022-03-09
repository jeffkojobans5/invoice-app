import { useState , createContext } from 'react';
import axios from 'axios'

export const UserContext = createContext();

function getUserFromLocalStorage() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { username: null, token: null };
  }

export function UserProvider ( {children } ) {
    const [user, setUser] = useState(getUserFromLocalStorage());
    
    const [ userDetails , setUserDetails] = useState(
        {
            username : "",
            email : "",
            password : ""
        }
    )
        
        const submit = async () => {
            axios.post('http://localhost:1337/api/auth/local/register' , userDetails).then((response)=>{
            setUser({ username : response.data.user.username , token : response.data.jwt})
            localStorage.setItem("user", JSON.stringify({ username : response.data.user.username , token : response.data.jwt} )); 
            window.location.href = 'http://localhost:3000/invoices';
        }).catch((error)=>{
            console.log(error.response.data);
        })
      }

    function handleRegister (e) {
        setUserDetails({
            ...userDetails , [e.target.name] : [e.target.value].toString()
        })
    }

    function logOut () {
        setUser({ username : null , token : null})
        localStorage.setItem("user", JSON.stringify({ username : null , token : null} )); 
        window.location.href = 'http://localhost:3000';
    }


    return (
        <UserContext.Provider 
        value = { { userDetails , handleRegister , submit , user , logOut }  } >
            { children }
        </UserContext.Provider>
    )
}