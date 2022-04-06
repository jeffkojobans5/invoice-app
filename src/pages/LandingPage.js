import { useContext } from 'react'
import { Link } from "react-router-dom";

// context
import { UserContext } from '../Editcontexts/UserContext'

// media
import Currency from "../media/cash.png"
import logos from "../media/18383.jpg"
import discounts from "../media/3937434.jpg"
import send from "../media/4421964.jpg"

// components
import { LandingpageBlocksRight } from '../EditComponents/index'
import { LandingpageBlocksLeft } from '../EditComponents/index'

function LandingPage () {
    const { logOut , isLogged  } = useContext(UserContext);

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

                        <div className="col-md-4 -mt-1 d-flex justify-content-end align-items-center">
                        { !isLogged   ? 
                                <>
                                    <a href="http://localhost:1337/api/connect/auth0" className="btn text-white" > Login </a>
                                    <a href="http://localhost:1337/api/connect/auth0" className="btn bg-white signup"> Sign Up </a>
                                </>
                        : "" }
                        { isLogged ? <a href="#" onClick= {logOut } className="btn bg-white signup"> Log Out </a> : ""}
                        </div>                
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
                        <LandingpageBlocksLeft
                            title = " Brand your invoices with your customized business logo "
                            textLogo = { logos }
                            para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
                            textclassName = "col-md-6 text p-5 rounded"
                            logoclassName = "col-md-6 image  d-flex justify-content-center align-items-center"                            
                        />                                     
                        <LandingpageBlocksRight 
                            title = " Choose from over 100 currencies for your invoice "
                            textLogo = { Currency }
                            para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
                            textclassName = "col-md-6 image p-5 rounded"
                            logoclassName = "col-md-6 text  d-flex justify-content-center align-items-center"                            
                        />                                     
                </div>
                <div className="container">
                        <LandingpageBlocksLeft
                            title = " Brand your invoices with your customized business logo "
                            textLogo = { discounts }
                            para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
                            textclassName = "col-md-6 text p-5 rounded"
                            logoclassName = "col-md-6 image  d-flex justify-content-center align-items-center"                            
                        />                                     
                        <LandingpageBlocksRight 
                            title = " Choose from over 100 currencies for your invoice "
                            textLogo = { send }
                            para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
                            textclassName = "col-md-6 image p-5 rounded"
                            logoclassName = "col-md-6 text  d-flex justify-content-center align-items-center"                            
                        />                                     
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