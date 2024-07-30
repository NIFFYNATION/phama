import styles from "./PagesNav.module.css";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";

function PagesNav() {
  return (
    <div className="contain bg-red-500 ml-auto mr-auto">
      <nav className="flex justify-between items-center">
        <Logo />
        <ul className={`flex flex-col md:flex-row gap-3 `}>
          <li>
            <NavLink to="/" className={`bg-red-900 ` + styles.anchor}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={styles.anchor}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className={styles.anchor}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" className={styles.anchor}>
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/Pages" className={styles.anchor}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={styles.anchor}
              Id={styles.findHousebtn}
            >
              Find A House
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    // <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="/"><Logo /></Navbar.Brand>

    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="ms-auto me-auto nav">
    //         <Nav.Link as={Link} to="/">Home</Nav.Link>
    //         <Nav.Link  as={Link} to="/About">About</Nav.Link>
    //         <Nav.Link as={Link} to="/Services">Service</Nav.Link>
    //         <Nav.Link as={Link} to="/Pages">Pages</Nav.Link>
    //         <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
    //       </Nav>

    //       <Nav>
    //         <Nav.Link eventKey={2} as={Link} to="/Appointment">
    //         Appointment
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default PagesNav;
