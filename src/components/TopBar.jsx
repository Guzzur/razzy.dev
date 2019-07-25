import React, { Component } from 'react';
import { Row, Card, Navbar } from 'react-bootstrap';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
} from 'mdbreact';

class TopBar extends Component {
  state = {
    collapse1: false,
    collapseID: '',
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <Row className="w-100 p-0 m-0" style={{ maxWidth: '1200px' }}>
        <Card className="w-100">
          <Card.Body className="p-0 m-0">
            <MDBContainer>
              <MDBNavbar color="amber lighten-4" light>
                <MDBContainer>
                  <MDBNavbarBrand>
                    <MDBNavLink to="/" style={{ color: '#880000' }}>
                      razzy<span style={{ fontSize: '0.6rem' }}>.dev</span>
                    </MDBNavLink>
                  </MDBNavbarBrand>
                  <MDBHamburgerToggler
                    color="#880000"
                    id="hamburger1"
                    onClick={() => this.toggleSingleCollapse('collapse1')}
                  />
                  <MDBCollapse isOpen={this.state.collapse1} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="#!">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">Link</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#!">Profile</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
            </MDBContainer>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default TopBar;

// import React from 'react';
// import { Row, Card, Navbar } from 'react-bootstrap';

// class TopBar extends React.Component {
//   render() {
//     return (
//       // <Nav
//       //   activeKey="/home"
//       //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
//       // >
//       //   <Nav.Item>
//       //     <Nav.Link href="/home">Active</Nav.Link>
//       //   </Nav.Item>
//       //   <Nav.Item>
//       //     <Nav.Link eventKey="link-1">Link</Nav.Link>
//       //   </Nav.Item>
//       //   <Nav.Item>
//       //     <Nav.Link eventKey="link-2">Link</Nav.Link>
//       //   </Nav.Item>
//       //   <Nav.Item>
//       //     <Nav.Link eventKey="disabled" disabled>
//       //       Disabled
//       //     </Nav.Link>
//       //   </Nav.Item>
//       // </Nav>
//       <Row className='w-100 p-0 m-0' style={{ maxWidth: '1200px' }}>
//         <Card className="w-100">
//           <Card.Body>
//             <Navbar>
//               <Navbar.Toggle />
//               {/* <Navbar.Collapse className="justify-content-end">
//                 <Navbar.Text>
//                   Right bar
//                 </Navbar.Text>
//               </Navbar.Collapse> */}
//             </Navbar>
//           </Card.Body>
//         </Card>
//       </Row>
//     );
//   }
// }

// export default TopBar;
