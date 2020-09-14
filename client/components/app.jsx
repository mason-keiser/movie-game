import React from 'react';
import Header from './navbar';
import Home from './home';
import Login from './login';

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
  }

  setView(names, params) {
    this.setState({
      view: {
        name: names,
        params: params
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
      ? <Login/>
      : (this.state.view.name === 'home')
        ? <Home setView={this.setView} view={this.state.view}/>
        : null
    return (
        <div>
          <Header setView={this.setView}/>
          {view}
        </div>
    )
  }
}