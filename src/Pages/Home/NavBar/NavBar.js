import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {

  const logOut = () => {
    alert('LogOut');
  }
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
          <Container>
              <Navbar.Brand href="#home">Laptop Gallery</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="/laptops">Laptops</Nav.Link>
                  <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                    <Button onClick={logOut} variant="link">LogOut</Button>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  {/* <Navbar.Text> <i className="fas fa-user-circle"></i> <a href="/login">{user?.displayName}</a></Navbar.Text> */}
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
};



export default NavBar;