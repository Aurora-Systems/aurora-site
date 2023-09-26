import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer container-fluid text-center p-3">
            <div className="row">
            <div className="col-sm">
                    <h5 className="mb-2">Details</h5>
                    <div className="d-flex flex-column ">
                    <p>support@aurorasystems.co.zw</p>
                    <p>258 Smuts Rd Waterfalls</p>
                    <p>+263 78 898 4320</p>
                    </div>
                </div>
                <div className="col-sm">
                    <h5 className="mb-2">Links</h5>
                    <div className="d-flex flex-column ">
                    <Link href="/">Home</Link>
                    <Link href="/Services">Services</Link>
                    <Link href="/Roadmap">Roadmap</Link>
                    <Link href="/Careers">Careers</Link>
                    <Link href="/Support">Support</Link>
                    </div>
                </div>
                <div className="col-sm">
                    <h5 className="mb-2">Social</h5>
                    <div className="d-flex flex-column">
                    <Link href="https://www.linkedin.com/company/aurorazw/" target="_blank">Linkedin</Link>
                    <Link href="https://twitter.com/AuroraSystemsZW" target="_blank">Twitter</Link>
                    <Link href="https://www.facebook.com/AuroraSystemsAfrica" target="_blank">Facebook</Link>
                    
                    </div>
                    
                </div>
                <div className="col-sm">
                    <h5 className="mb-2">Legal</h5>
                    <div className="d-flex flex-column">
                    <Link href="./Legal" >Data protection</Link>
                    <Link href="">© {new Date().getFullYear()} Aurorasystems </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

