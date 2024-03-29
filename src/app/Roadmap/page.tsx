"use client"
import { btnGen, vp } from "../components/cssStyles";

export default function Roadmap() {
    return(
    <div className="container">
        <div className={vp}>
            <div className="row general_block d-flex align-items-center">
                <div className="col-sm text-center order-md-2">
                    <h1 className="display-1 text-white">Q4</h1>
                </div> 
                <div className="col-sm right-border ">
                    <p className="text-end">In Beta</p>
                    <p className="display-1">ICLAIM</p>
                    <p>Iclaim will make it easier for hospitals large or small to process their claims online. Create your own claim template, auto update of ICD10, ZRVS, TPHAU without paying an extra dime, allow claim capture when offline.</p>
                </div>
            </div>
        </div>
        <div className={vp}>
        <div className="row general_block d-flex align-items-center">
        <div className="col-sm text-center ">
    <h1 className="display-1  text-white">Q1</h1>
</div> 
<div className="col-sm left-border order-md-1">
    <p className="text-end">2024</p>
    <p className="display-1">HMS</p>
    <p>Fully automated hospital management system to handle patient appointments, diagnosis and private files. Create work schedules for doctors and nurses. Monitor activity and review patients past records. Statistics are generated and sent automatically. Just a tip of the iceberg, there&apos;s more!</p>
</div>

</div>
        </div>
        <div className={vp}>
            <div className="row general_block d-flex align-items-center">
                <div className="col-sm text-center order-md-2">
                    <h1 className="display-1 text-white">Q4</h1>
                </div> 
                <div className="col-sm right-border ">
                    <p className="text-end">2025</p>
                    <p className="display-1">Bleu Finance</p>
                    <p>We&apos;re redefining banking accessibility, providing financial empowerment through WhatsApp. Our Neobank breaks traditional barriers, offering seamless services to millions worldwide.</p>
                </div>
            </div>
        </div>
    
        <div className={vp}>
            <h1 className=" text-white">Theres More...</h1>
            <button data-tally-open="wa5aAy" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave"  className={btnGen}>Subscribe</button>
        </div>
     
    </div>
    )
}