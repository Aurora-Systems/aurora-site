import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer text-center">
            <div className="row">
                <div className="col-sm">
                    <h5>More</h5>
                    <Link href="">Linkedin</Link>
                    <Link href="">Twitter</Link>
                    <Link href="">Facebook</Link>
                    <Link href="">Instagram</Link>

                </div>
                <div className="col-sm">
                    <h5>Social</h5>
                    <div className="d-flex flex-column">
                    <Link href="">Linkedin</Link>
                    <Link href="">Twitter</Link>
                    <Link href="">Facebook</Link>
                    <Link href="">Instagram</Link>
                    </div>
                    
                </div>
                <div className="col-sm">
                    <h5>Legal</h5>
                    <Link href="">Linkedin</Link>
                    <Link href="">Twitter</Link>
                    <Link href="">Facebook</Link>
                    <Link href="">Instagram</Link>
                </div>
            </div>
        </div>
    )
}

