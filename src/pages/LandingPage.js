import { useContext } from 'react'
import Mockup from '../media/mockup.jpg'
import invoiceEasy from "../media/invoiceEasy.png"
import currency from "../media/cash.png"
import logos from "../media/18383.jpg"
import discounts from "../media/3937434.jpg"
import send from "../media/4421964.jpg"
import { AuthContext } from '../Editcontexts/AuthContext'


import { Link } from "react-router-dom";

function LandingPage () {
    const { loginWithRedirect , user , logout , isAuthenticated , isLoading} = useContext(AuthContext);

    return (
        <>
        <div className="container-fluid p-0 h-100 landing">
            <div className="container m-w-100 ">
                <div className="row d-flex">
                    <div className="col-md-4 mt-4 nav">    
                        <ul>
                            <li><Link to="/invoices">SInvoicing@gmail.com</Link></li>
                        </ul>                         
                    </div>
                    <div className="col-md-4 mt-1 d-flex justify-content-center align-items-center logo">
                        <p> S-Invoicing.</p>
                    </div> 

                    { isLoading ? "" : 
                        <div className="col-md-4 -mt-1 d-flex justify-content-end align-items-center">
                            { isAuthenticated ?  <p className="text-white mt-3 px-5"> Hello, { user.given_name } </p> : ""}
                            {
                                !isAuthenticated ? 
                                <>
                                    <a href="#" className="btn text-white" onClick = { ()=>loginWithRedirect() } > Login </a>
                                    <a href="#" className="btn bg-white signup"> Sign Up </a>
                                </>
                                    : ""
                            }
                            { isAuthenticated ?  <a href="#" className="btn bg-white signup" onClick={ logout }> Logout </a> : ""}
                        </div>
                    }
                </div>
            </div>

            <div className="container mx-auto banner">
                <h1 className="text-center"> Smart  <br/> Invoicing </h1>
                <p className="text-center banner-text mt-3">  
                All your invoices in one place. Don't stress sending invoices to your clients
              <br/> Sign Up to enjoy the smart invoice journey.
               </p>
            </div>
            <img src="https://user-images.githubusercontent.com/67514352/159530606-7e292d0c-f9fa-4404-b70f-bd0e200da548.jpg" alt="" className="mockup"/>
        </div>

            <div className="container-fluid pt-5 pb-5 bg-white below-banner">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 text p-5 rounded">
                            <h3 className="text-justify"> Choose from over 100 <br/> currencies for your invoice </h3>
                            <p className="text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p>
                        </div>
                        <div className="col-md-6 image  d-flex justify-content-center align-items-center">
                            <img src={ currency } alt="" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 text  d-flex justify-content-center align-items-center">
                            <img src={ logos } alt="" />
                        </div>
                        <div className="col-md-6 image mt-3 p-5 rounded">
                            <h3 className="text-justify"> Brand your invoices with <br/>your customized business logo </h3>
                            <p className="text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. </p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 mt-3  text p-5 rounded">
                            <h3 className="text-justify"> Add Tax, Discount , Shipping  <br/>and Payment Details to invoice </h3>
                            <p className="text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                        <div className="col-md-6 image  d-flex justify-content-center align-items-center">
                            <img src={ send } alt="" />
                        </div>
                    </div>  
                    <div className="row ">
                        <div className="col-md-6 text  d-flex justify-content-center align-items-center">
                            <img src={ discounts } alt="" />
                        </div>
                        <div className="col-md-6  image p-5 rounded">
                            <h3 className="text-justify"> Email your invoice <br/> to your customer at a go </h3>
                            <p className="text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>                                      
                </div>
            </div>

            <div className="container-fluid footer_ bg-">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-3">
                            <p> &#169;	Smart Invoicing 2022</p>
                        </div>                     
                        <div className="col-md-4 p-3">
                            <p className="text-center developers"> <a href=""> Developers </a> </p>
                        </div>                     
                        <div className="col-md-4 p-3">
                            <p className="text-end"> Made by <a href="#"> @jeffkojobans </a> at FOCUSPPC. </p>
                        </div>                     
                    </div>
                </div>
            </div>
        </>            
    )
} 

export default LandingPage