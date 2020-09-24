import React from 'react';
import { Container, Navbar } from 'reactstrap';

export default class MainHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const buttonStyle = (window.screen.width < 600)
            ? {
                position: 'fixed',
                bottom: '40px',
                left: '30%',
                width: '150px',
                height: '40px',
                backgroundColor: 'white',
                border: 'none',
                boxShadow: '0px 3px 4px grey',
                borderRadius: '5%'
            }
            : {
                position: 'fixed',
                bottom: '40px',
                left: '42%',
                width: '150px',
                height: '50px',
                backgroundColor: 'white',
                border: 'none',
                boxShadow: '0px 3px 4px grey',
                borderRadius: '5%'
            }
        return (
            <div className="homePage" style={{ overflowY: 'hidden', justifyContent: 'left' }}>
                <div className='pt-4' style={{ fontSize: '1.5rem' }}>My Likes: </div>
                <div className='myLikesContainer mt-5 mb-5' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflowX: 'scroll' }}>
                    <img className='mr-2 ml-2' style={{ height: '150px' }} src="/images/horror.jpg" alt="step" />
                    <img className='mr-2 ml-2' style={{ height: '150px' }} src="/images/step.jpg" alt="step" />
                    <img className='mr-2 ml-2' style={{ height: '150px' }} src="/images/images.jpeg" alt="step" />
                    <img className='mr-2 ml-2' style={{ height: '150px' }} src="/images/online-horror-movie-poster.jpg" alt="step" />
                    <img className='mr-2 ml-2' style={{ height: '150px' }} src="/images/step.jpg" alt="step" />
                </div>
                <div className='mt-5' style={{ fontSize: '1.5rem' }}> Find A New Movie:
                <p className='mt-3'> Click the Start Game button Below to start the process of finding a great new movie for you to watch!</p>
                </div>
                <Navbar className=' bg-white' style={{ position: 'fixed', bottom: '0', width: '100%', height: '60px' }}></Navbar>
                <div>
                    <button className='m-auto' style={buttonStyle} onClick={() => { this.props.setView('game-prep', {}) }}>Start Game</button>
                </div>
            </div>
        )
    }
}