import React from 'react';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return (
            <div className='homePage'>
                <div className='greeting'>
                    <h2>Welcome</h2>
                </div>
            </div>
        )
    }
}