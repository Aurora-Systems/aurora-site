"use client"
import { Fade } from "react-awesome-reveal";
import { vp } from "../components/cssStyles";
import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";

export default function Services() {
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
                <div className="row">
                <div className="col-sm">
                    <img src="https://ngratesc.sirv.com/Aurora/website-interface-browser-computer-web-purple-3d-scene-irendering-premium-photo_85504-46.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-sm">
                    <h1>WEB Services</h1>
                    <i>Your unique digital footprint!</i>
                </div>
                </div>
              
            </div>

        </div>
    )
}