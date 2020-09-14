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
      let offset = -86;
      if (window.innerWidth < 768) {
        offset = -286;
      }
        return (
          <Container fluid={true} className="py-3 bg-white sticky-top">
            <Navbar color="faded" light
              expand="md"
              className="row py-0 ">
              <NavbarToggler onClick={this.handleToggle} navbar="true" style={{border: 'none'}}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="" navbar>
                <div>
                  <a
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle, () => {this.props.setView('login', {})}}>
                      Login
                  </a>
                </div>
                <div className="ml-md-5">
                  <a
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle, () => {this.props.setView('sign-up', {})}}>
                    Sign Up
                  </a>
                </div>
                <div className="ml-md-5">
                  <a
                    href="https://masonkeiser.com/"
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Mason's Portfolio
                  </a>
                </div>
              </Nav>
            </Collapse>
            <NavbarBrand className="pointer decoration-none" onClick={() => {
                scroll.scrollToTop();
                if (this.state.isOpen) {
                  this.handleToggle();
                }
                this.props.setView('home', {})
            }}>
              Movie Match
            </NavbarBrand>
          </Navbar>
        </Container>
        );
    }
}