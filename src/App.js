import React, { Component }  from 'react';
import Form from './components/form';
import Login from './components/login';
class APP extends Component {

    constructor(props){
       super(props);
    }
    render(){
        return(
          <Form children={ <Login /> } />
        );
    }
}

export default APP;