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
                console.log('fetch movies:', movies);
                this.props.setView('game-page', {});
            })
            .catch(err => console.error(err));
    }

    render() {
        const buttonStyle = (window.screen.width < 600)
            ? {
                width: '250px',
                height: '40px',
                backgroundColor: 'white',
                border: 'none',
                boxShadow: '0px 3px 4px grey',
                borderRadius: '5%'
            }
            : {
                width: '250px',
                height: '50px',
                backgroundColor: 'white',
                border: 'none',
                boxShadow: '0px 3px 4px grey',
                borderRadius: '5%'
            };
        return (
            <div className="homePage pt-3">
                <p className="d-flex justify-content-center pt-3 " style={{ fontSize: '1.3rem' }}>Select a Genre to Choose From!</p>
                <div className="genreContainer">
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3 mb-3" style={buttonStyle} onClick={() => this.getMovies(28)}>Action & Adventure</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-2 mb-3" style={buttonStyle} onClick={() => this.getMovies(27)}>Horror</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-2 mb-3" style={buttonStyle} onClick={() => this.getMovies(35)}>Comedy</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-2 mb-3" style={buttonStyle} onClick={() => this.getMovies(18)}>Drama</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-2 mb-3" style={buttonStyle} onClick={() => this.getMovies(878)}>Science Fiction</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-2 mb-3" style={buttonStyle} onClick={() => this.getMovies(10749)}>Romance</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-2 mb-3" style={buttonStyle} onClick={() => this.getMovies(53)}>Thriller</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-2 mb-3" style={buttonStyle} onClick={() => this.getMovies(99)}>Documentary</button>
                    </div>
                </div>
            </div>
        );
    }
}
