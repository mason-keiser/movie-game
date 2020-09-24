import React from 'react';

export default class GamePrep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
        this.getMovies = this.getMovies.bind(this);
    }

    getMovies(genre) {
        fetch(`/api/movies/${genre}`)
            .then(res => res.json())
            .then(movies => {
                this.setState({ movies });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <p className="d-flex justify-content-center mt-3">Select a Genre to Choose From!</p>
                <div className="genreContainer">
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3" onClick={() => this.getMovies(28)}>Action & Adventure</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3" onClick={() => this.getMovies(27)}>Horror</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3" onClick={() => this.getMovies(35)}>Comedy</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3" onClick={() => this.getMovies(18)}>Drama</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3" onClick={() => this.getMovies(878)}>Science Fiction</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3" onClick={() => this.getMovies(10749)}>Romance</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3" onClick={() => this.getMovies(53)}>Thriller</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3" onClick={() => this.getMovies(99)}>Documentary</button>
                    </div>
                </div>
            </div>
        );
    }
}
