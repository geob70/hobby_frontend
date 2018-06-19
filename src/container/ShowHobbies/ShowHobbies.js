import React,{Component} from 'react';
import './ShowHobbies.css';
import axios from 'axios';
import {Button,Grid,Col,Row,Nav} from 'react-bootstrap'
import NavLog from '../../component/Navigation/NavLog';
import Addhobby from '../Forms/addhobby';

class ShowHobbies extends Component{
    



    constructor(props) {
        super(props);

        this.state = {


            hobby: [],
            description:[],
            isLoading: false,
            username: ''
        }
        
    }
    show = (id) => {
        id.style.display = 'block';
    }

    hide = (id) => {
        id.style.display = 'none';
    }
    

    showadd = ()=>{
          const hobb = document.getElementById('hobby');
          const addhobb = document.getElementById('add');

          this.hide(hobb);
          this.show(addhobb);
    }
    showhobb = () => {
        const hobb = document.getElementById('hobby');
        const addhobb = document.getElementById('add');

        this.hide(addhobb);
        this.show(hobb);
    }


    onClick = (id) => (e) =>{
        e.preventDefault();
        
            alert(id);
            window.location.reload();

        axios.post('http://localhost:419/user/delhobby/',{
            body: {
                userid: id,
                message:'you deleted an hobby'  
            }
        }).then(res => {

        })
    }
    
    componentWillMount() {
        
        
        const user_info = localStorage.getItem('user_email');
        console.log('here');
        console.log(user_info);

        axios.post('http://localhost:419/user/showhobbies/', {
            body:{
                email:user_info
            }
        } )
            .then(res =>{
                
                console.log(res.data.hobby);
                 this.setState({
                     hobby:res.data.hobby,
                     isLoading:true
                 });
            });
        if(localStorage.getItem('username')) {
            this.setState({username : localStorage.getItem('username')});
        }
        
    }
    

    render(){
        // console.log(this.state.hobby);
        
         return(
             
             
          <div className="ShowHobbies"> 
                <NavLog/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="border">
                                <div className="col-sm-3 col-lg-2">
                            <Nav className="navbar navbar-default navbar-fixed-side">
                                <span onClick={this.showadd}>Add Hobby</span>
                            </Nav>
                            <Nav className="navbar navbar-default navbar-fixed-side">
                                <span onClick={this.showhobb}>Show Hobby</span>
                            </Nav>
                            </div>
                            </div>
                            <div id="hobby" className="col-sm-9 col-lg-10">
                            <Grid>
                                <Row>
                                     {
                                    this.state.hobby.map(item => (
                                                <Col xs={6} md={4}>
                                                        <h3>{item.hobby}</h3>
                                                    <p className="pp">Description :</p>
                                                    <h5 className="h55">{item.description}</h5>
                                                    <p>
                                                    <Button onClick={this.onClick(item.id)} bsStyle="Danger">Delete</Button>&nbsp;
                                                    </p>
                                                </Col>
                                    ))
                                }
                                </Row>
                            </Grid>
                            </div>
                            <div id="add" className="col-sm-9 col-lg-10">
                                      <div className="box">
                                          <Addhobby/>
                                      </div>
                            </div>
                        </div>
                </div>
          </div>
     );
    };   
}
export default ShowHobbies;