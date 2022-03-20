function LandingPage () {

    return (
        <div className="container-fluid p-0 h-100 landing">
            <div className="container w-75">
                <div className="row d-flex">
                    <div className="col-md-4 mt-4 nav">                        
                        <ul>
                            <li> <a href=""> Home </a> </li>
                            <li> <a href=""> Testimonials </a> </li>
                            <li> <a href=""> Contact </a> </li>
                        </ul>                         
                    </div>
                    <div className="col-md-4 mt-1 d-flex justify-content-center align-items-center logo">
                        <p> Invoicing</p>
                    </div> 
                    <div className="col-md-4 -mt-1 d-flex justify-content-end align-items-center">
                        <a href="#" className="btn text-white"> Login </a>
                        <a href="#" className="btn bg-white signup"> Sign Up </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto banner ">
                <h1 className="text-center"> Smart Home <br/> Application </h1>
                <p className="text-center banner-text mt-3">  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
                nulla provident  <br/>voluptatem eaque iusto, commodi omnis velit voluptas illum ipsum, 
               </p>
            </div>
        </div>
    )
} 

export default LandingPage