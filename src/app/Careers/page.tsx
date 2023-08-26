"use client"
import { useRef, useState } from "react"
import { btnGen, loading, vp } from "../components/cssStyles"
import emailjs from "@emailjs/browser"
import { Alert } from "react-bootstrap"

export default function Careers(){
    const  [resMessage,setResMessage] = useState({
        msg:"",
        variant:"",
        show:false
    })
    const [buttonState,setButtonState] = useState<any>("Send")
    //form 
    const form:any = useRef()

    const handleSubmit=(e:FormDataEvent)=>{
        e.preventDefault()
        setButtonState(loading)
        emailjs.sendForm(
            "service_q768rob",
            "template_x20vzju",
            form.current,
            "f4Heb8OpYEpcSqbNa",
        ).then(res=>{
            console.log(res)
            setResMessage({...resMessage,msg:"Awesome!, we got your message.",variant:"success",show:true})
            setButtonState("Send")
        }).catch(err=>{
            console.log(err)
            setResMessage({...resMessage,msg:"It's not you it's us. Please try again!",variant:"danger",show:true})
            setButtonState("Send")
        })
    }

    return(
        <div className={vp}>
            <div>
                <h1>GROW</h1>
            <img src="" className="img-fluid" alt=""/>
            </div>
             <form onSubmit={(e:any)=>handleSubmit(e)}>
             <div>
                    <Alert show={resMessage.show} variant={resMessage.variant}>
                        {resMessage.msg}
                    </Alert>
                </div>
                <div className="row ">
                    <div className="col-sm mb-3">
                        <input type="text" name="name" className="form-control" placeholder="Full Name"/>
                    </div>
                    <div className="col-sm mb-3">
                        <input type="text" name="occupation" className="form-control" placeholder="Occupation"/>
                    </div>
                    <div className="col-sm mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Email"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm mb-3">
                        <input type="tel" name="phone" className="form-control" placeholder="Phone Number"/>
                    </div>
                    <div className="col-sm mb-3">
                        <select  className="form-control" name="location">
                            <option selected disabled>Preffered work location</option>
                            <option>Remote</option>
                            <option>On-Site</option>
                        </select>
                    </div>
                    <div className="col-sm mb-3">
                        <select className="form-control" name="education">
                            <option selected disabled>Education Level</option>
                            <option>Primary / High School</option>
                            <option>University / College</option>
                            <option>No formal education</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                       <div className="col-sm mb-3">
                            <textarea placeholder="Tell us about yourself" name="message" className="form-control"></textarea>
                        </div> 
                </div>
                <button type="submit" className={btnGen}>Lets Go!</button>
             </form>
        </div>
    )
}