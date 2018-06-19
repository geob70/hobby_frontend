import React,{Component} from 'react';
import axios from 'axios';
import Navbar from '../../component/Navigation/Navbar';
import {Redirect} from 'react-router-dom';
// import Homepage from '../Homepage';
import Hobby from '../ShowHobbies/ShowHobbies';
import {Form,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';
import './signup.css';



class Signup extends Component{

     state = {
          
               fullname: "",
               email: "",
               number:"",
               password:"",
               cpassword:"",
               created:false,
               ISlogged_In: false
     }

     change = e => {
          this.setState({
               [e.target.name]:e.target.value,
          });
     }
     show = (id) => {
             id.style.display = 'block';
     }

     hide = (id) => {
             id.style.display = 'none';
     }

      hidelog = () => {
               const login = document.getElementById('login');
               this.hide(login);
               window.location.reload();
      }
     
      logSubmit = (e) => {
              e.preventDefault();
              const user = {
                      email: this.state.email,
                      password: this.state.password,
              }
              console.log(user);
              console.log(this.state.ISlogged_In);
              const self = this;
              axios.post('http://localhost:419/login', user)
                      .then(res => {
                              console.log(res.data);
                              alert(res.data.message);
                              if (res.data.success === 'ok') {
                                      alert('Logged in successfully');
                                      self.setState({
                                              ISlogged_In: true,
                                              username: res.data.name
                                      });
                                      localStorage.setItem('username', this.state.username);
                                      localStorage.setItem('user_email', res.data.email);
                              }

                      }, );
      }

     onSubmit = (e) => {
          e.preventDefault();
          console.log(this.state.fullname);
          const user = {
               fullname: this.state.fullname,
               email: this.state.email,
               number: this.state.number,
               password: this.state.password,
               cpassword: this.state.cpassword,
          }
          console.log(user);


          axios.post('http://localhost:419/signup', user)
               .then(res=>{
                    console.log(res.data);
                    alert(res.data.message);
                    if(res.data.success === true){
                            const login = document.getElementById('login');
                            this.show(login);
                    return(
                         this.setState({
                              created : true
                         })
                        //  console.log("here"),
                       // <Redirect from="/signup" to="/" component={Homepage}/>
                    );
                }
               });
     }
     render(){
        //   if(this.state.created === true){
        //        return(
        //             <Redirect from="/signup" to="/" component={Homepage}/>
        //        );
              
        //   }
        if(this.state.ISlogged_In === true){
               console.log(this.state.username);
               return(
                       
                    <Redirect onLoad={window.location.reload()} from="/login" to="/addhobbies" component={Hobby}/>
               );
              
          }
          return(
                    <div>
                         <Navbar/>
                         <div className="sign">
                           <Form onSubmit={this.onSubmit}>
                        <FormGroup controlId="formInlineText">
                                <ControlLabel>Full name :  </ControlLabel>{'  '}
                                <FormControl className="sign_input" name="fullname" type="text" placeholder="Enter your fullname" value={this.state.fullname} onChange={e=>this.change(e)} required  />
                                <span className="barr"></span>
                        </FormGroup>

                         <FormGroup controlId="formInlineEmail">
                                <ControlLabel>email :  </ControlLabel>{'  '}
                                <FormControl className="sign_input" name="email" type="email" placeholder="Enter your email" value={this.state.email} onChange={e=>this.change(e)} required  />
                                <span className="barr"></span>
                        </FormGroup>
                         <FormGroup controlId="formInlineNumber">
                                <ControlLabel>Phone No :  </ControlLabel>{'  '}
                                <FormControl className="sign_input" name="number" type="number" placeholder="Enter your Phone No" value={this.state.number} onChange={e=>this.change(e)} required  />
                                <span className="barr"></span>
                          </FormGroup>
                         <FormGroup controlId="formInlinePassword">
                                <ControlLabel>Password :  </ControlLabel>{'  '}
                                <FormControl className="sign_input" name="password" type="password" placeholder="password" value={this.state.password} onChange={e=>this.change(e)} required  />
                                <span className="barr"></span>
                        </FormGroup>
                        <FormGroup controlId="formInlinePassword">
                                <ControlLabel>Confirm password :  </ControlLabel>{'  '}
                                <FormControl className="sign_input" name="cpassword" type="password" placeholder="Confirm password" value={this.state.cpassword} onChange={e=>this.change(e)} required  />
                                <span className="barr"></span>
                        </FormGroup>

                         <button className="signb" type="submit">Sign Up</button>
                    </Form>



                
                    <div id="login" class="modal">
                        <div class="modal-content">
                                <div class="modal-body">
                                <span onClick={this.hidelog} class="close">×</span>
                                        <Form onSubmit={this.logSubmit}>
                                <FormGroup controlId="formInlineEmail">
                                <ControlLabel>Name :  </ControlLabel>{'  '}
                                <FormControl className="sign_input" name="email" type="email" placeholder="Enter your email" value={this.state.email} onChange={e=>this.change(e)} required  />
                                </FormGroup>
                                <FormGroup controlId="formInlinePassword">
                                <ControlLabel>Email :</ControlLabel>{'  '}
                                <FormControl className="sign_input" type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={e=>this.change(e)} required />
                                </FormGroup>
                                <button className="signb" type="submit">Log in</button>
                        </Form>
                                </div>
                        </div>
                    </div>
                         </div>
                     </div>
          );
     };
}
export default Signup;