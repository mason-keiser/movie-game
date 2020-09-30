import React from 'react';

export default class GamePage extends React.Component {
  render() {
    const movieObj = this.props.view.params.movies.map((obj, idx) => {
      return (
        <div key={idx} className="movieContainer">
          <img
            className="col-12"
            src={`https://image.tmdb.org/t/p/w500/${obj.poster}`}
            alt={`${obj.title} poster`}
          />
        </div>
      );
    });
    return (
      <div className="container col-12">
        {movieObj}
      </div>
    );
  }
}
