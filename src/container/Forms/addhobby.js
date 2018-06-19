import React,{Component} from 'react';
import axios from 'axios';
// import {Redirect} from 'react-router-dom';
import {Form,FormControl} from 'react-bootstrap';
import './login.css';

class Addhobby extends Component{


     state = {

               email: "",
               ISlogged_In : false,
               hobby: "",
               description:""
     }
     change = e => {
          this.setState({
               [e.target.name]:e.target.value,
          });
     }

     // localStorage.setItem('username', this.state.username);
     // localStorage.setItem('user_email', res.data.email);
     
     onSubmit = (e) => {
          e.preventDefault();
          const user_info = localStorage.getItem('user_email');
          console.log(user_info);
          this.setState({
               email:user_info
          })
          console.log('kk');
          console.log(this.state.hobby);
          // console.log(user);
          
          axios.post('http://localhost:419/user/addhobby', {
                    user : {
               email: user_info,
               hobby: this.state.hobby,
               description:this.state.description,
               message:'You just create an Hobby'
               }
          })
               .then(res=>{
                    console.log(res.data);
                    alert(res.data.message);  
                    this.setState({
                         ISlogged_In: true,
                    });
               }, 
               
          );
          window.location.reload();
          console.log(this.state.description);
     }
     
     render(){
           if (this.state.ISlogged_In === true) {
                axios.post('http://localhost:419/user/sendsms', {
                     user: {
                        hobby: this.state.hobby,
                        message: 'You just created an Hobby'
                     }
                })
           }


          return(
               <div>
                    <Form block onSubmit={this.onSubmit}>
                         <FormControl type="text" name="hobby" placeholder="Enter Hobby" value={this.state.hobby} onChange={e=>this.change(e)} required/>
                         <textarea name="description" placeholder="Reason for hobby" value={this.state.description} onChange={e=>this.change(e)} required></textarea>
                         <button className="button" type="submit">Add hobby</button>
                         </Form>
               </div>
          );
     };
}
export default Addhobby;    