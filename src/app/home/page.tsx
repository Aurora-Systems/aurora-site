"use client"
import { Fade } from "react-awesome-reveal"
export default function Home(){
    return(
        <div className="viewPage d-flex align-items-center text-center flex items-center justify-content-center colorBg">
            <div className=" ">
            
           
            <div className="d-flex flex-row justify-content-center ">
                <Fade direction="left"> <img className="img-fluid" src="https://ngratesc.sirv.com/Aurora/phone1.png" width="150"/></Fade>
                <Fade direction="right" ><img className="img-fluid" src="https://ngratesc.sirv.com/Aurora/phone2.png" width="150"/></Fade>
               
                
            </div>
            <div className="">
                <Fade>
                <h1 className="fs-1 fw-bolder text-white font-bold">MANAGE YOUR DATA MORE EFFICIENTLY</h1>
                </Fade>
              
            </div>
            </div>
            
           
        </div>
    )
}