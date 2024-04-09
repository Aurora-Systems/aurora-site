"use client"
import { vp } from "../components/cssStyles";

export default function Iclaim(){
    return(
        <div className="container">
             <div  className="mb-3">
                <br/>
                <br/>
                <br/>
                <br/>
                <img src="https://ngratesc.sirv.com/i-claim/iclaim.jpg" className="rounded img-fluid " />
            </div>
            <div className={vp}>
                <div className="mb-3">
                    <h1>i-Claim</h1>
                    <p>Process medical aid claims within seconds</p>
               </div>
               <div className="row m-2">
                <div className="col-sm m-2 p-0 bg-white rounded">
                    <div className="iclaimprimary  p-2 rounded rounded-bottom-0">
                       
                        <p className="fw-bold">PREDICTIVE ANALYSIS<br/>  TRENDS</p>
                        
                    </div>
                    <div className="text-dark p-2 ">
                        <p className="text-dark">I-Claim employs predictive analysis to anticipate and reveal real-time insights into your claims processing, offering a proactive view of ongoing activities. </p>
                        <img src="https://ngratesc.sirv.com/i-claim/Area%20Chart.png" width="30" alt=""/>
                    </div>
                </div>
                <div className="col-sm p-0 m-2 bg-white rounded">
                    <div className="iclaimprimary p-2  p-0 rounded rounded-bottom-0">
                        
                        <p className="fw-bold">SMART VALIDATION <br/>MULTIPLE MODELS</p>
                        
                    </div>
                    <div className="text-dark p-2">
                        <p className="text-dark">i-Claim utilizes smart validation, harnessing the power of multiple models to uncover a diverse range of potential issues in your claims data. </p>
                        <img src="https://ngratesc.sirv.com/i-claim/Order%20Completed.png" width="30" alt=""/>
                    </div>
                </div>
                <div className="col-sm m-2 p-0 bg-white rounded">
                    <div className="iclaimprimary p-2 rounded rounded-bottom-0">
                        <p className="fw-bold">NATURAL LANGUAGE <br/> PROCESSING</p>
                        
                        
                    </div>
                    <div className="text-dark p-2">
                        <p className="text-dark">i-Claim enables natural conversations, going beyond mere claims processing. It provides insightful data discussions tailored to your needs. </p>
                        <img src="https://ngratesc.sirv.com/i-claim/Voice%20Recognition.png" width="30" alt=""/>
                    </div>
                </div>
               </div>
            </div>
           
            <div className="mb-3"></div>
        </div>
    )
}