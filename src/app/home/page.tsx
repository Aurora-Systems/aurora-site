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
            <div className="viewPage d-flex flex-wrap justify-content-center align-items-center cb2">
            <Fade direction="down">
                <div className="row text-center">
                <div className="col-sm">
                        <img src="https://ngratesc.sirv.com/Aurora/home_page_three.png" className="Sirv rocketImg animate__animated animate__swing animate__infinite	animate__slow "/>
                    </div>
                     <div className="col-sm">
                        <h1>WHAT DO I REALLY NEED?</h1>
                        <p>What you need is a website to boost up your sales or advertising material. Perhaps you already have this but your workspace is a mess. Whatever the case, from websites to marketing to organizing your work, we have every tool in the box. Contact us today and we will prep up the best solution for your business.</p>
                        <button className="btn btn-light rounded-pill shadow-lg">Get Started</button>
                    </div>
                  
                </div>
                   
                    </Fade>        
            </div>
            
            
           
        </div>
    )
}