import React from 'react';

export default class GamePrep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="container">
                <p className="d-flex justify-content-center mt-3">Select a Genre to Choose From!</p>
                <div className="genreContainer">
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3">Action & Adventure</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3">Horror</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3">Comedy</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3">Drama</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3">Science Fiction</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3">Romance</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3">Thriller</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="genre mt-3">Documentary</button>
                    </div>
                </div>
            </div>
        );
    }
}
