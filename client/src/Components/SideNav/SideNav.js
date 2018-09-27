import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './SideNav.css'

const sidenav = (props) => {
    return (
    <Slide left when={props.show}>
    <div className='SideNav'>
    <h3 className='Brand'>Collin.</h3>
    <div className='Links'>
    <a href='/'>Link</a>
    <a href='/'>Link</a>
    <a href='/'>Link</a>
    <a href='/'>Link</a>
    </div>
    </div>
    </Slide>
    )
}
export default sidenav;