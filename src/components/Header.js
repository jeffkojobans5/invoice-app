import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../Contexts/UserContext';
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
    let user = localStorage.getItem("username")
    const { logout } = useAuth0();
    
    return (
        <nav className="container-fluid">
            <div className="container main pb-2">
                <div className="row">
                    <div className="col-md-3 logo">
                        <h5 className="text-white mt-1"> <Link to="/" className="text-white text-decoration-none">S-Invoicing</Link> </h5>
                    </div>
                    <div className="col-md-6">
                        <ul className="link-list">
                            <li><Link to= { `/${user}/invoices` } > Invoices</Link></li>
                            <li><Link  to= { `/${user}/create-invoice` } > + Create Invoice</Link></li>
                        </ul> 
                    </div>
                    <div className="col-md-3 login-register">
                        {/* { user.token ?   null : <Link to="/login"> Login / Register </Link>  } */}
                        {/* { user.token ?   <p onClick={ logOut }> Log out </p> : null   } */}
                        {/* <a href="#"  className="btn bg-white signup"> Log Out </a>                       */}
                        <button type="button" className="btn btn-outline-warning w-50 delete-button" name="" onClick={()=>{logout({returnTo:window.location.origin}) ; localStorage.removeItem('username') ; localStorage.removeItem('jwt');}  } > Sign Out </button>
                    </div>                    
                </div>
            </div>
        </nav>
    )
}

export default Header