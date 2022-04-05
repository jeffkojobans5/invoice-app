import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../Editcontexts/UserContext';
import { AuthContext } from '../Editcontexts/AuthContext'

const Header = () => {
    const { user , logOut } = useContext(UserContext);
    // const { loginWithRedirect , myUser , logout } = AuthContext();
    
    return (
        <nav className="container-fluid ">
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-3 logo">
                        <h5 className="text-white "> <Link to="/" className="text-white text-decoration-none">S-Invoicing</Link> </h5>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li><Link to="/invoices">Invoices</Link></li>
                            <li><Link to="/createInvoice">+ Create Invoice</Link></li>
                        </ul> 
                    </div>
                    <div className="col-md-3 login-register">
                      {/* { user.token ?   null : <Link to="/login"> Login / Register </Link>  } */}
                      {/* { user.token ?   <p onClick={ logOut }> Log out </p> : null   } */}
                    </div>                    
                </div>
            </div>
        </nav>
    )
}

export default Header