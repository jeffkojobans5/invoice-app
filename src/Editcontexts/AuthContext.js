// import { createContext , useState , useContext , useEffect } from 'react'
// import { Auth0Provider } from '@auth0/auth0-react';
// import { useAuth0 } from '@auth0/auth0-react';


// export const AuthContext = createContext()

// export const AuthProvider = ( { children } ) => {
//     const [ myUser , setMyUser ] = useState(null);
//     const { isAuthenticated , loginWithRedirect , logout , user , isLoading } = useAuth0();

//     useEffect(()=>{
//         console.log(`user: ${user}`)
//         console.log(`isAuthenticated: ${isAuthenticated}`)
//         console.log(`isLoading: ${isLoading}`)
//         console.log(user)
//     },[isAuthenticated])

//     return (
//         <AuthContext.Provider value={{ loginWithRedirect , logout , user , isLoading , isAuthenticated }}>
//             { children }
//         </AuthContext.Provider>
//     )
// }

