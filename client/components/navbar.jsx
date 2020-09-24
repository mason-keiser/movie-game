import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import {
  animateScroll as scroll
} from 'react-scroll';

export default class Header extends React.Component {
  constructor(props) {
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
    if (this.props.view.name === 'login' || this.props.view.name === 'sign-up' || this.props.view.name === 'home') {
      return (
        <Container fluid={true} className="py-3 bg-white sticky-top shadow-sm">
          <Navbar color="faded" light
            expand="md"
            className="row py-0">
            <NavbarToggler onClick={this.handleToggle} navbar="true" style={{ border: 'none' }} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="" navbar>
                <div>
                  <a
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle, () => { this.props.setView('login', {}); }}>
                    Login
                  </a>
                </div>
                <div className="ml-md-5">
                  <a
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle, () => { this.props.setView('sign-up', {}); }}>
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
                    Masons Portfolio
                  </a>
                </div>
                <div className="ml-md-5">
                  <a
                    href="https://andrewsong.org"
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Andrews Portfolio
                  </a>
                </div>
              </Nav>
            </Collapse>
            <NavbarBrand className="pointer decoration-none" onClick={() => {
              scroll.scrollToTop();
              if (this.state.isOpen) {
                this.handleToggle();
              }
              this.props.setView('home', {});
            }}>
              Movie Match
            </NavbarBrand>
          </Navbar>
        </Container>
      );
    } else if (this.props.view.name === 'main') {
      return (
        <Container fluid={true} className="py-3 bg-white sticky-top shadow-sm">
          <Navbar color="faded" light
            expand="md"
            className="row py-0 ">
            <NavbarToggler onClick={this.handleToggle} navbar="true" style={{ border: 'none' }} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="" navbar>
                <div>
                  <a
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link mt-2"
                    onClick={this.handleToggle, () => { this.props.setView('home', {}); }}>
                    Start Game
                  </a>
                </div>
                <div className="ml-md-5">
                  <a
                    href="https://masonkeiser.com/"
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link mt-2"
                    onClick={this.handleToggle}>
                    Masons Portfolio
                  </a>
                </div>
                <div className="ml-md-5">
                  <a
                    href="https://andrewsong.org/"
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link mt-2"
                    onClick={this.handleToggle}>
                    Andrews Portfolio
                  </a>
                </div>
              </Nav>
            </Collapse>
            <NavbarBrand className="pointer decoration-none" onClick={() => {
              scroll.scrollToTop();
              if (this.state.isOpen) {
                this.handleToggle();
              }
              this.props.setView('home', {});
            }}>
              Movie Match
            </NavbarBrand>
          </Navbar>
        </Container>
      );
    } else if (this.props.view.name === 'game' || this.props.view.name === 'matches_page') {
      return (
        <Container fluid={true} className="py-3 bg-white sticky-top shadow-sm">
          <Navbar color="faded" light
            expand="md"
            className="row py-0 ">
            <NavbarToggler onClick={this.handleToggle} navbar="true" style={{ border: 'none' }} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="" navbar>
                <div>
                  <a
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link mt-2"
                    onClick={this.handleToggle, () => { this.props.setView('home', {}); }}>
                    Start Game
                  </a>
                </div>
                <div className="ml-md-5">
                  <a
                    href="https://masonkeiser.com/"
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link mt-2"
                    onClick={this.handleToggle}>
                    Masons Portfolio
                  </a>
                </div>
                <div className="ml-md-5">
                  <a
                    href="https://andrewsong.org/"
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link mt-2"
                    onClick={this.handleToggle}>
                    Andrews Portfolio
                  </a>
                </div>
              </Nav>
            </Collapse>
            <NavbarBrand className="pointer decoration-none" onClick={() => {
              scroll.scrollToTop();
              if (this.state.isOpen) {
                this.handleToggle();
              }
              this.props.setView('home', {});
            }}>
              Movie Match
            </NavbarBrand>
            <div className='mr-4 mt-1 fa fa-envelope' style={{ position: 'absolute', right: '0' }}></div>
          </Navbar>
        </Container>
      );
    }
  }
}
