import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Home.css'

class Home extends Component {
    render () {
        return (
            <div className='scrollTest'>
                <Fade top cascade>
                    <div id='Header'>
                    <h1 className='homeHeader'>Hi :)</h1>
                    <h1 className='homeHeader'>I'm Collin.</h1>
                    </div>
                    <div className='intro'>
                    Based out of Houston, TX, I specialize in Front-End Development. I design and develop Websites, Web and Mobile Applications.</div>
                </Fade>
            </div>
        )
    }
}

export default Home;