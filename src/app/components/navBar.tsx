"use client"
import { navLink } from "./cssStyles";
import { useMediaQuery } from "react-responsive";

import { Dropdown, DropdownButton } from "react-bootstrap";
import Link from "next/link";

export default function NavBar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div className="container d-flex text-center justify-content-center bg-transparent" style={{position:"relative", zIndex:"0 !important"}}>
      {isDesktopOrLaptop && <nav className={navLink}>
        <Link href="/" className="specialText"><img src="https://ngratesc.sirv.com/Aurora/logo.png" width="30" className="sirv" /></Link>
        <Link href="/">Home</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Roadmap">Roadmap</Link>
        <Link href="/Careers">Careers</Link>
        <Link href="/Support">Support</Link>
        <button className="btn btn-primary rounded-pill">Waitlist</button>
      </nav>}
      {
        isTabletOrMobile &&
        <Dropdown className="mt-3">
          <DropdownButton drop="down-centered" variant="transparent" className="btnMenu"  title={ <img src="https://ngratesc.sirv.com/Aurora/menu.png" alt="Menu"/>}>
         
          <Dropdown.Item>          <Link href="/" className="specialText"><img src="https://ngratesc.sirv.com/Aurora/logo.png" width="30" className="sirv" /></Link>
            </Dropdown.Item>
            <Dropdown.Item>          <Link href=""><img src="https://ngratesc.sirv.com/Aurora/home.svg" width="20" alt="" /> Home</Link>
            </Dropdown.Item>
            <Dropdown.Item>          <Link href=""><img src="https://ngratesc.sirv.com/Aurora/products.svg" width="20" alt="" /> Products</Link>
            </Dropdown.Item>
            <Dropdown.Item>          <Link href=""><img src="https://ngratesc.sirv.com/Aurora/roadmap.svg" width="20" alt="" /> Roadmap</Link>
            </Dropdown.Item>
            <Dropdown.Item>          <Link href=""><img src="https://ngratesc.sirv.com/Aurora/job.svg" width="20" alt="" /> Careers</Link>
            </Dropdown.Item>
            <Dropdown.Item>          <Link href=""><img src="https://ngratesc.sirv.com/Aurora/support.svg" width="20" alt="" /> Support</Link>
            </Dropdown.Item>
            <Dropdown.Item>          <button className="btn btn-primary rounded-pill">Waitlist</button>
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>




      }
    </div>
  )
}