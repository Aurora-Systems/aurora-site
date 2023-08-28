"use client"
import { btnGen, vp } from "../components/cssStyles";

export default function Roadmap() {
    return(
    <div className="container">
        <div className={vp}>
            <div className="row general_block d-flex align-items-center">
                <div className="col-sm text-center order-md-2">
                    <h1 className="display-1">Q4</h1>
                </div> 
                <div className="col-sm right-border ">
                    <p className="text-end">2023</p>
                    <p className="display-1">ICLAIM</p>
                    <p>Iclaim will make it easier for hospitals large or small to process their claims online. Create your own claim template, auto update of ICD10, ZRVS, TPHAU without paying an extra dime, allow claim capture when offline.</p>
                </div>
            </div>
        </div>
        <div className={vp}>
        <div className="row general_block d-flex align-items-center">
        <div className="col-sm text-center ">
    <h1 className="display-1">Q1</h1>
</div> 
<div className="col-sm left-border order-md-1">
    <p className="text-end">2024</p>
    <p className="display-1">HMS</p>
    <p>Fully automated hospital management system to handle patient appointments, diagnosis and private files. Create work schedules for doctors and nurses. Monitor activity and review patients' past records. Statistics are generated and sent automatically. Just a tip of the iceberg, there's more!</p>
</div>

</div>
        </div>
        <div className={vp}>
            <div className="row general_block d-flex align-items-center">
                <div className="col-sm text-center order-md-2">
                    <h1 className="display-1">Q4</h1>
                </div> 
                <div className="col-sm right-border ">
                    <p className="text-end">2025</p>
                    <p className="display-1">Blue Finance</p>
                    <p>Make your payments from anywhere in the world, personal book keeping or for an organization,with the option to scale perfectly. Payrolls, invoices, quotations all in one app (desktop and mobile). No need to submit tax forms, all done for you.</p>
                </div>
            </div>
        </div>
    
        <div className={vp}>
            <h1>Theres More...</h1>
            <button data-tally-open="wa5aAy" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave"  className={btnGen}>Subscribe</button>
        </div>
     
    </div>
    )
}