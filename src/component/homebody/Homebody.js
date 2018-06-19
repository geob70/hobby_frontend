import React from 'react';
import './homebody.css';
import img from './hobby.jpg';
import Login from '../../container/Forms/Login';
import Navbar from '../Navigation/Navbar';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
// import 'https://fonts.googleapis.com/css?family=Montserrat';


const homebody = ()=>{
         return(
              <div>
                   <Navbar/>
                   <div className = "container-fluid bg-1 text-center">
                         <h3 className="margin">Hi, Welcome</h3>
                         <img src={img} alt="hobby" className="img-circle margin"/>
                         <h1 className="margin">Hobbi App</h1>
                         <Login/> 
                    </div>
              </div>     
         );
};
export default homebody;