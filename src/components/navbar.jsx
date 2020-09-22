import React, { Component } from "react";
import { InputGroup, Navbar, NavbarBrand } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyName: "Fornu",
      user_Log: "Login",
      user_reg: "Register",
      notification: "Notification",
      profile: "Profile",
      cart: "Cart",
      cart_sta : 0
    };
  }
  log = () => {
    this.setState(state => {
      return {
        user_Log : 'welcome user1',
        user_reg : 'Logout'
      }
    });
  }
  logout = () => {
    this.setState(state => {
      return {
        user_Log : 'Login',
        user_reg : 'Register',
        cart_sta : null,
      }
    });
  }

  cartUpdate = () => {
    this.setState (state => {
      return{
        cart_sta : state.cart_sta + 1
      }
    });
  }



  render() {
    return (
      <Navbar bg="light" expand="lg" className="bas">
        <Navbar.Brand href="#"> {this.state.CompanyName} </Navbar.Brand>
        <Form inline className="col-2 col-sm-8">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="search"
              className="mr-sm-4"
            />
            <Button type="submit" className="btn btn-primary">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </Button>
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="basic-navabar-nav mr-sm-3" />
        <Navbar.Collapse  id="basic-navbar-nav" className="bas my-0 my-lg-0">
          <Nav className="mr-sm-2" variant="outline-info">
            <Nav.Item>
              <Nav.Link href="#loging" onClick= {this.log}> {this.state.user_Log} </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#reg" onClick = {this.logout}> {this.state.user_reg} </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#noti"> {this.state.notification} </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#pro"> {this.state.profile} </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#cart" className="mr-0" onClick={this.cartUpdate}>
                <FontAwesomeIcon icon={faShoppingCart} />
            
                <Badge variant="primary">{this.state.cart_sta}</Badge>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
