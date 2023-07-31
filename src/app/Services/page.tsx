"use client"
import { Fade } from "react-awesome-reveal";
import { btnGen, vp } from "../components/cssStyles";
import { IonIcon } from "@ionic/react";
import { chevronDown, close } from "ionicons/icons";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Services() {
    const [hide,setHide] = useState({
        showWeb:false,
        showMS:false,
        showITS:false
    })
    return (
        <div className="container ">
            <div className={`${vp} d-flex flex-column justify-content-center`}>
                <div className="text-center">
                    <img src="https://ngratesc.sirv.com/Aurora/web_page_one.png" width="300" className="animate__animated  animate__slower animate__jello animate__infinite" />
                </div>
                <div className="text-center">
                    <Fade>
                        <h1 className="fs-1 mb-5 fw-bolder text-white">SERVICES</h1>
                        <b className=""><IonIcon className="animate__animated animate__slower animate__bounce animate__infinite" icon={chevronDown} size="large" color="light" /></b>
                    </Fade>
                </div>
            </div>
            <div className={vp}>
                <div className="row d-flex-x align-items-center">
                    <div className="col-sm mb-3">
                        <img src="https://ngratesc.sirv.com/Aurora/website-interface-browser-computer-web-purple-3d-scene-irendering-premium-photo_85504-46-removebg-preview.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm text-white">
                        <h1>WEB Services</h1>
                        <p><i>Your unique digital footprint!</i></p>
                        <p>
                            With over 1.13 Billion websites in the world its real tough to make yourself stand out. Well we cracked the code. From designing your website, email campaigns, ads and making sure your image is unique we have got it in the bag. Our team of SEO experts will get you up and running in no time!
                        </p>
                        <button onClick={()=>setHide({...hide,showWeb:true})} className={btnGen}>Learn More</button>
                    </div>
                </div>
            </div>
            <div className={vp}>
                <div className="row d-flex-x align-items-center">
               

                    <div className="col-sm mb-3 order-md-1">
                        <img src="https://ngratesc.sirv.com/Aurora/home_page.webp" className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm  text-white">
                        <h1>Management Systems</h1>
                        <p><i>As long as it's not refined your data is just trash</i></p>
                        <p>Mangement systems help to make your data make sense without you having to do an aweful amount of work. Manage your client data, stats, financials all from one platform</p>
                        <button className={btnGen}>Learn More</button>
                    </div>
                   
                </div>
            </div>
            <div className={vp}>
                <div className="row d-flex-x align-items-center">
                    <div className="col-sm mb-3">
                        <img src="https://ngratesc.sirv.com/Aurora/monitor_two.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm text-white">
                        <h1>Information Technology Security</h1>
                        <p><i>Over 560,000 pieces of malware are made each day</i></p>
                            <ul className="text-decoration-none">
                                <li> Do you have protocols set in place to keep your data safe?</li>
                                <li>Do your apps have 2Factor authentication enabled? </li>
                                <li> Do I need to use proxies and vpns?</li>
                            </ul>
                          
                        
                        <button className={btnGen}>Learn More</button>
                    </div>
                </div>
            </div>
           


        </div>
    )
}