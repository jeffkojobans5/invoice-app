import Mockup from '../media/mockup.png'
import invoiceEasy from "../media/invoiceEasy.png"

function LandingPage () {

    return (
        <>
        <div className="container-fluid p-0 h-100 landing">
            <div className="container m-w-100 ">
                <div className="row d-flex">
                    <div className="col-md-4 mt-4 nav">                        
                        <ul>
                            <li> <a href=""> Home </a> </li>
                            <li> <a href=""> Testimonials </a> </li>
                            <li> <a href=""> Contact </a> </li>
                        </ul>                         
                    </div>
                    <div className="col-md-4 mt-1 d-flex justify-content-center align-items-center logo">
                        <p> S-Invoicing.</p>
                    </div> 
                    <div className="col-md-4 -mt-1 d-flex justify-content-end align-items-center">
                        <a href="#" className="btn text-white"> Login </a>
                        <a href="#" className="btn bg-white signup"> Sign Up </a>
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
            <img src={Mockup} alt="" className="mockup"/>
        </div>

            <div className="container-fluid pt-5 pb-5 bg-white below-banner">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 text p-5 rounded">
                            <h3 className="text-justify"> Brand your invoices with <br/>your customized business logo </h3>
                            <p className="text-justify"> Each invoice created with our online invoice maker can be customized to the 
                            specific client you’re sending it to. You can choose to add your company or 
                            business logo, add sender info (or set default sender in the settings), add 
                            client info, add as many items as you wish such as products with fixed 
                            prices & services with hourly rates, </p>
                        </div>
                        <div className="col-md-6 image  d-flex justify-content-center align-items-center">
                            <img src={ invoiceEasy } alt="" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 text  d-flex justify-content-center align-items-center">
                            <img src={ invoiceEasy } alt="" />
                        </div>
                        <div className="col-md-6 image p-5 rounded">
                            <h3 className="text-justify"> Brand your invoices with <br/>your customized business logo </h3>
                            <p className="text-justify"> Each invoice created with our online invoice maker can be customized to the 
                            specific client you’re sending it to. You can choose to add your company or 
                            business logo, add sender info (or set default sender in the settings), add 
                            client info, add as many items as you wish such as products with fixed 
                            prices & services with hourly rates, </p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 text p-5 rounded">
                            <h3 className="text-justify"> Brand your invoices with <br/>your customized business logo </h3>
                            <p className="text-justify"> Each invoice created with our online invoice maker can be customized to the 
                            specific client you’re sending it to. You can choose to add your company or 
                            business logo, add sender info (or set default sender in the settings), add 
                            client info, add as many items as you wish such as products with fixed 
                            prices & services with hourly rates, </p>
                        </div>
                        <div className="col-md-6 image  d-flex justify-content-center align-items-center">
                            <img src={ invoiceEasy } alt="" />
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
                            <p className="text-center"> <a href=""> Developers </a> </p>
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