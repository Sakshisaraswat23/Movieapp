import React, {useState} from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import Popup from "./Popup";

function Movies()
{
    const [buttonPopup,setButtonPopup]=useState(false);
    return (
        <>
         <div className="my-5">
             <h1 className="text-center"> WELCOME TO MOVIES SECTIONS!!</h1>
             
         </div>
         

         <button onClick={()=>setButtonPopup(true)} className="btn btn-primary button" >share</button>
         <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
         <div className="container-fluid mb-5">
             <div className="row">
                 <div className="col-10 mx-auto">
                     <div className="row gy-4">
                         {
                             Sdata.map((val)=>{
                                 return <Card
                                 key={val.id}
                                 imgsrc={val.imgsrc}
                                 title={val.title}
                                 description={val.description}
                                 />
                             })
                         }                         
                     </div>
                 </div>
             </div>
         </div>
        </>
    )
}

export default Movies;