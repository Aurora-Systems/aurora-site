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
        <Link href="https://iclaim.aurorasystems.co.zw">i-Claim</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Roadmap">Roadmap</Link>
        <Link href="/Careers">Careers</Link>
        <Link href="/Support">Support</Link>
        <Link href="mailto:zkomichi@aurorasystems.co.zw?subject=Ready to build! &body=  Good day, I want to ...."><button className="btn btn-primary rounded-pill">Ready To Build?</button></Link>
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
            <Dropdown.Item className="text-center" href="https://iclaim.aurorasystems.co.zw">           i-Claim
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/Services">           Services
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/Roadmap">          Roadmap
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/Careers">          Careers
            </Dropdown.Item>
            <Dropdown.Item className="text-center" href="/Support">          Support
            </Dropdown.Item>
            <Dropdown.Item className="text-center"   href="mailto:zkomichi@aurorasystems.co.zw?subject=Ready to build! &body=  Good day, I want to ...."><button className="btn btn-primary rounded-pill">Ready To Build?</button>
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        </div>
        
      }
    </div>
  )
}