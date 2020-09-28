import React from 'react';

export default class GamePage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         movies: []
    //     };
    // }

    render() {
        const films = this.props.movies;
        console.log('films:', films);
        return (
            // <div>hello</div>
            <div>{films.title}</div>
        );
    }
}
