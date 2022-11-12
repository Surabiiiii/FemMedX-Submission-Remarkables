import React from "react";
import Beforedownload from "./Beforedownload";
import Benifit from "./Benifit";
import Black from "./black";
import CommonConcerns from "./CommonConcerns";

import Howitworks from "./Howitwoks";


import Pinkheader from "./Pinkheader";

import Faq from "./Faq"

const Videoconsult=()=>{
    return(
       <div className="bg-white">
       <Pinkheader/>
       
       <CommonConcerns />
        
        
       <Howitworks/>
       <Black/>
       <Benifit/>
       <Faq/>
       
       <Beforedownload/>
       
        </div>
    )
}
export default Videoconsult