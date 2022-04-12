import { useState , createContext } from 'react';
import axios from 'axios'

export const UserContext = createContext();

function getUserFromLocalStorage() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { username: null, token: null };
  }

export function UserProvider ( {children } ) {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('jwt'));
  console.log(isLogged)

    function logOut () {
            localStorage.removeItem('username');
            localStorage.removeItem('jwt');
            window.location.href = 'http://localhost:3000'
            setIsLogged(false);
        };        

    return (
        <UserContext.Provider 
        value = { {  logOut , isLogged }  } >
            { children }
        </UserContext.Provider>
    )
}