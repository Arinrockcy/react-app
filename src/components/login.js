// Example JS object used for CSS styling
import React, { Component }  from 'react';
const styles = {
    facebookBtn: {
      backgroundColor: 'rgb(51, 89, 157)'
    },
    form: {
      textAlign: 'center'
    }
  }
  
  class Login extends Component {
    handleOnSubmit = (e) => {
      e.preventDefault();
      console.log('Submitted!');
    };
    render() {
      return (
          <form style={styles.form} onSubmit={this.handleOnSubmit}>
            <h4>Welcome Back!</h4>
            <div className='form-group row'>
              <input className='input' type='text' placeholder='Email'/>
            </div>
            <div className='form-group row'>
              <input className='input' type='password' placeholder='Password'/>
            </div>
            <div className='form-group row'>
              <button className='btn' type='submit'>Log In</button>
            </div>
            <div className='form-group row'>
              <button className='fb' type='submit'>Connect with GitHub</button>
            </div>
          </form>
        
      )
    }
  }
  

  export default Login;