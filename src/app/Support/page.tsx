"use client"

//import
import { useState,useRef} from "react"
import { btnGen,loading, vp } from "../components/cssStyles"
import emailjs from "@emailjs/browser"
import { Alert } from "react-bootstrap"

export default function Support(){
    //states
    // const [fullName,setFullName] = useState<string>("")
    // const [email,setEmail] = useState<string>("")
    // const [Phone,setPhone] = useState<string>("")
    // const [category,setCategory] = useState<string>("")
    // const [message,setMessage] = useState<string>("")
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
            "template_g4o2djt",
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
            {/* form data */}
            <div>
                <div className="mb-3">
                    <h1 className="text-white  text-white">Support</h1>
                    <p>Send a message and we will answer ASAP!</p>
                </div>
               
            <form ref={form} onSubmit={(e:any)=>handleSubmit(e)}>
                <div>
                    <Alert show={resMessage.show} variant={resMessage.variant}>
                        {resMessage.msg}
                    </Alert>
                </div>
                <div className="row">
                    <div className="col-sm mb-3">
                        <input type="text" className="form-control" placeholder="Full Name"name="full_name" required />
                    </div>
                    <div className="col-sm mb-3">
                        <input type="email" className="form-control" placeholder="Email" name="email" required/>
                    </div>
                    <div className="col-sm mb-3">
                        <input type="tel" className="form-control" placeholder="Mobile Number" name="mobile_number" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    <textarea className="form-control mb-3" placeholder="Your Message" name="message">

</textarea>
                    </div>
                    
                </div>
                <div>
                    <button className={btnGen}>{buttonState}</button>
                
                </div>
            </form>
            </div>
           
        </div>
    )
}