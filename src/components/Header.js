import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="container-fluid ">
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-3 logo">
                        <h5 className="text-white "> <Link to="/" className="text-white text-decoration-none">Invoice App</Link> </h5>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li><Link to="/">Invoices</Link></li>
                            <li><Link to="/create_invoice">+ Create Invoice</Link></li>
                            {/* <li><Link to="/">Upgrade</Link></li> */}
                        </ul>
                    </div>
                    <div className="col-md-3 login-register">
                        <Link to="/login"> Login / Register </Link>
                    </div>                    
                </div>
            </div>
        </nav>
    )
}

export default Header