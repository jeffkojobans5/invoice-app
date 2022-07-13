import { useContext } from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

// context
import { UserContext } from '../Contexts/UserContext'

// media
import Currency from "../media/cash.png"
import logos from "../media/18383.jpg"
import discounts from "../media/3937434.jpg"
import send from "../media/4421964.jpg"

// components
import { LandingpageBlocksRight } from '../Components/index'
import { LandingpageBlocksLeft } from '../Components/index'

// 
import { Footer } from "../Components/index"

function LandingPage () {
    const {  isLogged  } = useContext(UserContext);
    const { logout } = useAuth0();
    let user = localStorage.getItem("username")

    
    return (
        <>
        <div className="container-fluid p-0 h-100 landing">
            <div className="container m-w-100 ">
                <div className="row d-flex">
                    <div className="col-md-4 mt-4 nav">    
                        <ul>
                            {/* <li><Link to= { `${user}/invoices` } >Invoice the Smart way</Link></li> */}
                        </ul>                         
                    </div>
                    <div className="col-md-4 mt-1 d-flex justify-content-center align-items-center logo">
                        <p> S-Invoicing.</p>
                    </div> 

                        <div className="col-md-4 -mt-1 d-flex justify-content-end align-items-center">
                            <Link to="/invoices" className="btn bg-white signup"> View Invoices </Link>
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
                            title = " Add discounts, tax, shipping rates to your invoice  "
                            textLogo = { discounts }
                            para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
                            textclassName = "col-md-6 text p-5 rounded"
                            logoclassName = "col-md-6 image  d-flex justify-content-center align-items-center"                            
                        />                                     
                        <LandingpageBlocksRight 
                            title = "Save your invoice and come back in future to make updates to them"
                            textLogo = { send }
                            para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
                            textclassName = "col-md-6 image p-5 rounded"
                            logoclassName = "col-md-6 text  d-flex justify-content-center align-items-center"                            
                        />                                     
                </div>                
            </div>

            <Footer />
        </>            
    )
} 

export default LandingPage