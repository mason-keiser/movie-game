import React from 'react';
import Header from './navbar';
import Home from './home';
import Login from './login';
import SignUp from './sign-up';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'home',
        params: {}
      },
    };
    this.setView = this.setView.bind(this);
    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
  }

  setView(names, params) {
    this.setState({
      view: {
        name: names,
        params: params
      }
    })
  } 

  signUp(signupInfo) {
    fetch('/api/signUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupInfo)
    })
    .then(response => {
      response.json()
    });
  }

  login(loginInfo) {
    const email = loginInfo.user_email
    const password = loginInfo.user_password
    fetch('/api/login/' + email +'/' + password , {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
      if (response.status === 400){
        console.log(response)
      } else {
      response.json();
      this.setView('main', {})
      }
    })
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const view = (this.state.view.name === 'login')
      ? <Login setView={this.setView} login={this.login}/>
      : (this.state.view.name === 'home')
        ? <Home setView={this.setView} view={this.state.view}/>
        : (this.state.view.name === 'sign-up')
          ? <SignUp signUp={this.signUp} setView={this.setView}/>
          : null
    return (
        <div>
          <Header setView={this.setView}/>
          {view}
        </div>
    )
  }
}