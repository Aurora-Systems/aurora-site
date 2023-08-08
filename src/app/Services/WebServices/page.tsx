"use client"
import { vp } from "@/app/components/cssStyles";
import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";

export default function Webservices(){
    return(
        <div className="container">
            <div className={vp}>
                <div className="">
                    <div className="col-sm">
                        <img src="https://ngratesc.sirv.com/Aurora/about_page_four.png"  width="320" alt="globe" className="img-fluid animate__animated animate__bounce animate__infinite "/>
                    </div>
                    <div className="col-sm">
                        <h1 className="mb-5">Web Services</h1>
                        <h3><IonIcon className=" animate__animated animate__bounce animate__infinite"  color="light" icon={chevronDown}/></h3>
                    </div>
                    
                </div>
            </div>
            <div className={vp}>
                <div className="row">
                   
                    <div className="col-sm">
                    <img src="https://ngratesc.sirv.com/Aurora/tablet-search-engine-system-screen.jpg"  alt="globe" className="img-fluid rounded" />
                    </div>
                    <div className="col-sm">
                        <h1>Web Design</h1>
                    </div>

                </div>
            </div>
            <div className={vp}>
                <div className="row">
                    <div className="col-sm">
                    <img src="" width="320" alt="globe" className="img-fluid animate__animated animate__bounce animate__infinite "/>

                    </div>
                    <div className="col-sm">
                        <h1>Increase Awareness</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}