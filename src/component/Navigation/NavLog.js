import {NavLink} from 'react-router-dom';
import React from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import './Navbar.css';
import axios from 'axios';


const nameu = localStorage.getItem('username');

const NavLog = () => {
  this.state={
    email:""
  }
    
  this.logout=()=>{
    axios.post('http://localhost:419/user/logout/')
    .then(res=>{
      this.setState({
        email: res.data.email
      })
    })
    alert(this.state.email);
    console.log('lo');
    localStorage.setItem('user_email',this.state.email);
    localStorage.setItem('username', "");
    console.log(this.state.email);
  }
  
  
    return(
      <div className="navf">
      <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <p className="p">{nameu}</p>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
                    <Navbar.Collapse>
                <Nav pullRight>
                <NavItem>
                        <NavLink to="/signup" exact>...</NavLink>
                    </NavItem>
                     <NavItem>
                         <NavLink to="/login]" exact ><span onClick={this.logout} >Logout</span></NavLink>
                </NavItem>
                 </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );

      
};
     

export default NavLog;