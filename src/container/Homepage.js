import React, {Component} from 'react';
// import Aux from '../../hoc/Aux';
import { Route, Switch} from 'react-router-dom';
import Homebody from '../component/homebody/Homebody';
import Signup from './Forms/Signup';


import Hobby from './ShowHobbies/ShowHobbies';
import Footer from "../component/Footer/Footer";



class homepage extends Component {

render(){
     return(
      <div>
          <Switch>
               <Route path="/addhobbies" component={Hobby}/>
               <Route path="/signup" component={Signup}/>
               <Route path="/login" component={Homebody}/>
               <Route path="/" component={Homebody} />
          </Switch>
          <Footer/>
      </div>
     );
}

}


export default homepage;