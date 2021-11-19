import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../Hooks/useAuth";


const NavBar = () => {

  const { user, logOut } = useAuth();
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
          <Container>
              <Navbar.Brand><Nav.Link as={HashLink} to="/home">Laptop Gallery</Nav.Link></Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="/laptops">Laptops</Nav.Link>
                    {user?.email?
                      <span className="dis-flex">
                        <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                        <Button style={{textDecoration: 'none'}} onClick={logOut} variant="link">LogOut</Button>
                      </span> : 
                      <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
};



export default NavBar;