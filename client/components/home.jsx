import React from 'react';

export default class Home extends React.Component {
    render() {

        return (
            <div className='homePage'>
                <div className='greeting'>
                    <h2>Welcome</h2>
                </div>
                <div className='entranceButtons'>
                    <div>
                        <button className="mb-3" style={{ borderRadius: '5%', border: '1px solid black' }} onClick={() => {
                            this.props.setView('login', {})
                        }}>Login</button>
                    </div>
                    <div>
                        <button className='mt-2' style={{ borderRadius: '5%', border: '1px solid black' }} onClick={() => this.props.setView('sign-up', {})}>Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}