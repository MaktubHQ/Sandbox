import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ConnectWallet from "./connectwallet";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./login-btn";


const Navbars = () => {

  const {session, loading, status} = useSession()
  
  if (status === "unauthenticated") {
    return (
      <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <div className="logo">
              <Link href='/'>
                  <a>
                  <Image src='/maktub.png' alt="Logo" className="logo" width='120px' height='120px'/>
                  </a>

              </Link>   
          </div>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/education" className="links">Masterclass</Nav.Link>
            <Nav.Link href="/dejobs" className="links">Jobs</Nav.Link>
            {/* <Nav.Link href="/profile" className="links">Profile</Nav.Link>  */}
          </Nav>

          <Nav.Item >
               <Login/>
          </Nav.Item>



          
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
  }
  else{
    return (
      <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <div className="logo">
              <Link href='/'>
                  <a>
                  <Image src='/maktub.png' alt="Logo" className="logo" width='120px' height='120px'/>
                  </a>

              </Link>   
          </div>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/education" className="links">Masterclass</Nav.Link>
            <Nav.Link href="/dejobs" className="links">Jobs</Nav.Link>
            <Nav.Link href="/profile" className="links">Profile</Nav.Link> 
          </Nav>

          <Nav.Item >
               <Login/>
          </Nav.Item>



          
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
  }

    
  };
  
  export default Navbars;