import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="container-fluid ">
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-3 logo">
                        <h5 className="text-white"> Invoice App </h5>
                    </div>
                    <div className="col-md-9">
                        <ul>
                            <li><Link to="/">Learn more</Link></li>
                            <li><Link to="/">Invoicing guard</Link></li>
                            <li><Link to="/">Upgrade</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header