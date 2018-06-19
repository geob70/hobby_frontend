import {NavLink} from 'react-router-dom';
import React from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import './Navbar.css';

const Navbarr = (props) => (


      <div className="navf">
      <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <p>gifup</p>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
                    <Navbar.Collapse>
                <Nav pullRight>
                <NavItem>
                        <NavLink to="/signup" exact>SIGN UP</NavLink>
                    </NavItem>
                     <NavItem>
                         <NavLink to="/login" exact >LOG IN</NavLink>
                </NavItem>
                 </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>

      
//      <div className="navbar">
//            <nav>
//                <p>HobbiApp</p>
//                   <ul>
//                     <li>
//                          <NavLink className="navbar" to="/signup" exact>SIGN UP</NavLink>
//                     </li>

//                     <li>
//                           <NavLink to="/login" exact >LOG IN</NavLink>
//                     </li>
//                </ul>
//       </nav>
//      </div>
);
     

export default Navbarr;