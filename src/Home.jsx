import React from "react";
import image from "./image.png";

function Home()
{
    return (
        <>
         <section id="header" className="d-flex align-items-center">
             <div className="container-fluid ">
                 <div className="row">
                     <div className="col-10 mx-auto">
                     <div className="row">
                         <div className= "col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                           <h1>
                           “Without the element of fun, it’s not worth trying to excel at anything.”
                           </h1>
                           <h2 className="my-3">
                            have fun, watch movies !!
                           </h2>
                           <div className="mt-3">
                               <a href="/login" className="btn-get-started">Get Started</a>
                           </div>
                         </div>
                         <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={image} className="img-fluid" alt="home img" />
                         </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
        </>

    );
}

export default Home;