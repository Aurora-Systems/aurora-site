"use client"
import { navLink } from "./cssStyles";
import { useMediaQuery } from "react-responsive";

import { Dropdown, DropdownButton } from "react-bootstrap";

export default function NavBar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div className="container d-flex text-center justify-content-center bg-transparent" style={{position:"relative", zIndex:"0 !important"}}>
      {isDesktopOrLaptop && <nav className={navLink}>
        <a className="specialText"><img src="https://ngratesc.sirv.com/Aurora/logo.png" width="30" className="sirv" /></a>
        <a>Home</a>
        <a>Products</a>
        <a>Roadmap</a>
        <a>Careers</a>
        <a>Support</a>
        <button className="btn btn-primary rounded-pill">Waitlist</button>
      </nav>}
      {
        isTabletOrMobile &&
        <Dropdown className="mt-3">
          <DropdownButton drop="down-centered" variant="transparent" className="btnMenu"  title={ <img src="https://ngratesc.sirv.com/Aurora/menu.png" alt="Menu"/>}>
         
          <Dropdown.Item>          <a className="specialText"><img src="https://ngratesc.sirv.com/Aurora/logo.png" width="30" className="sirv" /></a>
            </Dropdown.Item>
            <Dropdown.Item>          <a><img src="https://ngratesc.sirv.com/Aurora/home.svg" width="20" alt="" /> Home</a>
            </Dropdown.Item>
            <Dropdown.Item>          <a><img src="https://ngratesc.sirv.com/Aurora/products.svg" width="20" alt="" /> Products</a>
            </Dropdown.Item>
            <Dropdown.Item>          <a><img src="https://ngratesc.sirv.com/Aurora/roadmap.svg" width="20" alt="" /> Roadmap</a>
            </Dropdown.Item>
            <Dropdown.Item>          <a><img src="https://ngratesc.sirv.com/Aurora/job.svg" width="20" alt="" /> Careers</a>
            </Dropdown.Item>
            <Dropdown.Item>          <a><img src="https://ngratesc.sirv.com/Aurora/support.svg" width="20" alt="" /> Support</a>
            </Dropdown.Item>
            <Dropdown.Item>          <button className="btn btn-primary rounded-pill">Waitlist</button>
            </Dropdown.Item>
          </DropdownButton>
          {/* <Dropdown.Toggle id="dropdown-button-drop-down-centered" drop="" className="rounded-pill border-none  border-0 " variant="primary" >
       
          </Dropdown.Toggle> */}
          {/* <Dropdown.Menu className="text-center w-100" >
           
          </Dropdown.Menu> */}
        </Dropdown>




      }
    </div>
  )
}