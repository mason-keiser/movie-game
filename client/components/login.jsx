import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_email: '',
            user_password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


  handleSubmit(callback) {
    event.preventDefault();
    const obj = {
      user_email: this.state.user_email,
      user_password: this.state.user_password
    };
    callback(obj);
  }

  handleChange(event) {
    if (event.target.id === 'user_email') {
      this.setState({ user_email: event.target.value });
    }
    if (event.target.id === 'user_password') {
      this.setState({ user_password: event.target.value });
    }
  }

    render() {
        return (
          <div className='homePage'>
            <div className='greeting'>
              <h2>Welcome Back</h2>
            </div>
            <form onSubmit={() => this.handleSubmit(this.props.login)}>
              <div className='form-group'>
                <label htmlFor="email" className='pr-4'>Email: </label>
                <input type="text" name='email' id='user_email' onChange={this.handleChange}/>
              </div>
              <div className='form-group'>
                <label htmlFor="password">Password: </label>
                <input type="text" name='password' id='user_password' onChange={this.handleChange}/>
              </div>
              <div className='form-group'>
                <button type='submit' className='btn mt-3' style={{ borderRadius: '5%', border: '1px solid black'}}>Login</button>
              </div>
            </form>
          </div>
        )
    }
}