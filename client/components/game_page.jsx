import React from 'react';

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const movies = this.props.movies;
    console.log('movies:', movies);
    return (
      <div>hello</div>
    );
  }
}
