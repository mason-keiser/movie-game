import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


  handleSubmit(callback) {
    event.preventDefault();
    const obj = {
      email: this.state.email,
      password: this.state.password
    };
    callback(obj);
  }

  handleEmailChange() {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange() {
    this.setState({
      password: event.target.value
    });
  }

    render() {
        return (
          <div className='homePage'>
            <div className='greeting'>
              <h2>Welcome Back</h2>
            </div>
            <form action="">
              <div className='form-group'>
                <label htmlFor="email" className='pr-4'>Email: </label>
                <input type="text" name='email' id='email' onChange={this.handleEmailChange}/>
              </div>
              <div className='form-group'>
                <label htmlFor="password">Password: </label>
                <input type="text" name='password' id='password' onChange={this.handlePasswordChange}/>
              </div>
              <div className='form-group'>
                <button type='submit' className='btn mt-3' style={{ borderRadius: '5%', border: '1px solid black'}}>Login</button>
              </div>
            </form>
          </div>
        )
    }
}