import React,{Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Hobby from '../ShowHobbies/ShowHobbies';
import {Form,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';
import './login.css';

class Login extends Component{


     state = {

               email: "",
               password:"",
               ISlogged_In : false,
               username:""
     }
     change = e => {
          this.setState({
               [e.target.name]:e.target.value,
          });
     }

     onSubmit = (e) => {
          e.preventDefault();
          const user = {
               email: this.state.email,
               password: this.state.password,
          }
          console.log(user);
          console.log('popop');
          console.log(this.state.email);
          const self = this;
          


          axios.post('http://localhost:419/login', user)
               .then(res=>{
                    console.log(res.data);
                    alert(res.data.message);
                    if(res.data.success === 'ok'){
                         alert('Logged in successfully');
                         self.setState({
                              ISlogged_In: true,
                              username: res.data.name
                         });
                         localStorage.setItem('username', this.state.username);
                         localStorage.setItem('user_email',res.data.email);
                    }
                    
               }, 
          );
     }
     render(){
          if(this.state.ISlogged_In === true){
                   const r = localStorage.getItem('user_email');
                   
                   console.log(r);
                   axios.post('http://localhost:419/user/logout/', {
                           user: {
                                   email: this.state.email,
                                   password: this.state.password,
                           }
                   }).then(res => {

                   });
                  console.log('ola');
               console.log(this.state.username);
               return(
                       
                    <Redirect onLoad={window.location.reload()} from="/login" to="/addhobbies" component={Hobby}/>
               );
              
          }
          return(
               <div>
                    <Form inline onSubmit={this.onSubmit}>
                                  <FormGroup controlId="formInlineEmail">
                                <ControlLabel>Name :  </ControlLabel>{'  '}
                                <FormControl className="input" name="email" type="email" placeholder="Enter your email" value={this.state.email} onChange={e=>this.change(e)} required  />
                                <span className="bar"></span>
                                </FormGroup>
                                <FormGroup controlId="formInlinePassword">
                                <ControlLabel>Email :</ControlLabel>{'  '}
                                <FormControl className="input" type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={e=>this.change(e)} required />
                                <span className="bar"></span>
                                </FormGroup>
                                <button className="loginb" type="submit">Log in</button>
                        </Form>
               </div>
          );
     };
}
export default Login;    