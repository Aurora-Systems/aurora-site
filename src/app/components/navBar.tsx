import { navLink } from "./cssStyles";

export default function NavBar(){
  return(
    <div className="container position-sticky d-flex text-center justify-content-center z-0 ">
        <nav className={navLink}>
          <a className="specialText"><img src="https://ngratesc.sirv.com/Aurora/logo.png" width="30" className="sirv"/></a>
          <a>Home</a>
          <a>Products</a>
          <a>Roadmap</a>
          <a>Careers</a>
          <a>Support</a>
          <button className="btn btn-primary rounded-pill">Waitlist</button>
        </nav>
    </div>
  )
}