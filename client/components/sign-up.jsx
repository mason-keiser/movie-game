import React from 'react';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


  handleSubmit(callback) {
    event.preventDefault();
    const obj = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    callback(obj);
  }

  handleEmailChange() {
    this.setState({
      email: event.target.value
    });
  }

  handleUsernameChange() {
    this.setState({
      username: event.target.value
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
              <h2>Welcome</h2>
            </div>
            <form onSubmit={() => this.handleSubmit(this.props.signUp)}>
              <div className='form-group'>
                <label htmlFor="email" className='pr-4'>Email: </label>
                <input type="text" name='email' id='email' onChange={this.handleEmailChange}/>
              </div>
              <div className='form-group'>
                <label htmlFor="username">Username: </label>
                <input type="text" name='username' id='username' onChange={this.handleUsernameChange}/>
              </div>
              <div className='form-group'>
                <label htmlFor="password">Password: </label>
                <input type="text" name='password' id='password' onChange={this.handlePasswordChange}/>
              </div>
              <div className='form-group'>
                <button type='submit' className='btn mt-2' style={{ borderRadius: '5%', border: '1px solid black'}}>Sign Up</button>
              </div>
            </form>
          </div>
        )
    }
}