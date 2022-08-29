import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ConnectWallet from "./connectwallet";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Navbars = () => {
  
let id = ""
      if (ConnectWallet.showProfile){
        id = "show"
      }

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
              <Nav.Link href="/demo" className="links">Demo</Nav.Link>
              <Nav.Link href="/dejobs" className="links">DeJobs</Nav.Link>
              <Nav.Link href="/profile" className="links">Profile</Nav.Link> 
            </Nav>

            <Nav.Item className="d-flex">
                  <a><ConnectWallet/></a>
            </Nav.Item>



            
          </Navbar.Collapse>
        </Container>
      </Navbar>



        // <nav>
            
        //     <div className="links">
        //     <Link href='/demo'>
        //     <a>Demo</a>

        //         </Link>
            
        //         <Link href='/dejobs'>
                    
        //     <a>Jobs</a>

        //         </Link>


        //         <Link className={ConnectWallet.showProfile ? "showProfile" : "hideProfile"} href='/profile'>
                    
        //             <a>Profile</a>
        
        //                 </Link>

        //     </div>
        //     <div className="wallet">
        //     <a><ConnectWallet/></a>

        //     </div>
           

        // </nav>
      
  
  
    );
  };
  
  export default Navbars;