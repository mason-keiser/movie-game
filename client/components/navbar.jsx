import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {
  Link,
  animateScroll as scroll
} from 'react-scroll';

export default class Header extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          isOpen: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
      if (window.innerWidth < 768) {
        this.setState({ isOpen: !this.state.isOpen });
      }
    }

    render() {
      const logo = (window.screen.width < 700)
        ?  <h1 className='header-logo img-fluid'> [ M  K ]</h1>
        :  <h1 className='header-logo img-fluid'>  Mason Keiser</h1>
      let offset = -86;
      if (window.innerWidth < 768) {
        offset = -286;
      }
        return (
          <Container fluid={true} className="py-3 shadow-lg bg-white sticky-top">
            <Navbar color="faded" light
              expand="md"
              className="row py-0 ">
              <NavbarToggler onClick={this.handleToggle} navbar="true" style={{border: 'none'}}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="" navbar>
                <NavItem>
                  <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                      Login
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="s"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Sign Up
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="https://masonkeiser.com/"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Mason's Portfolio
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
            <NavbarBrand onClick={() => {
                scroll.scrollToTop();
                if (this.state.isOpen) {
                  this.handleToggle();
                }
              }}
                className="pointer decoration-none">
              Movie Game
              </NavbarBrand>
          </Navbar>
        </Container>
        );
    }
}