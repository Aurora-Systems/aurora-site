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
        <div className="mobile">
<Dropdown className="mt-3 ">
          <DropdownButton drop="down-centered" variant="transparent" className="btnMenu "  title={ <img src="https://ngratesc.sirv.com/Aurora/menu.png" alt="Menu"/>}>
          <Dropdown.Item className="text-center" href="">        <img src="https://ngratesc.sirv.com/Aurora/logo.png" width="30" className="sirv" />
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/">           Home
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/Services">           Products
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/Roadmap">          Roadmap
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/Careers">          Careers
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/Support">          Support
            </Dropdown.Item>
            <Dropdown.Item className="text-center">          <button className="btn btn-primary rounded-pill">Waitlist</button>
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        </div>
        
      }
    </div>
  )
}