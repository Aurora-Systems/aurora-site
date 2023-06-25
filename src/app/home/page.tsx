"use client"
import { Fade } from "react-awesome-reveal"
import {chevronDown} from "ionicons/icons"
import { IonIcon } from "@ionic/react"
export default function Home(){
    return(
        <div className="container z-3  ">
            <div className=" viewPage d-flex align-items-center flex-column  text-center flex items-center justify-content-center cb">
            
           
            <div className="d-flex flex-row justify-content-center ">
                <Fade direction="left"> <img className="img-fluid" src="https://ngratesc.sirv.com/Aurora/phone1.png" width="150"/></Fade>
                <Fade direction="right" ><img className="img-fluid" src="https://ngratesc.sirv.com/Aurora/phone2.png" width="150"/></Fade>
               
                
            </div>
            <div className="">
                <Fade>
                <h1 className="fs-1 fw-bolder text-white">READY TO CONNECT?</h1>
                <b className="animate__pulse animate__infinite"><IonIcon icon={chevronDown} size="large" color="light" /></b>
                </Fade>
                
              
            </div>
            </div>
           
            <div className="viewPage d-flex flex-wrap justify-content-center align-items-center cb2">
            <Fade direction="down">
                <div className="row text-center">
                     <div className="col-sm">
                        <h1>WHY US?</h1>
                        <p>Because we understand what you need. Running a business is tough. Having to arrange appointments, work schedules, payrolls and marketing material; It's all a lot. That's where we come in. We have affordable management systems to cater for your every need. Automate your workflow and check your balances it's as simple as that.</p>
                    </div>
                    <div className="col-sm">
                        <img src="https://ngratesc.sirv.com/Aurora/mp_three.png?scale.option=fill&scale.width=246&scale.height=246" className="Sirv rocketImg animate__animated animate__bounce animate__infinite	animate__slow"/>
                    </div>
                </div>
                   
                    </Fade>        
            </div>
            
            
           
        </div>
    )
}