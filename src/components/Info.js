import React from 'react';
import profile from '../images/Rectangle90.jpg'
import mail from '../images/Button.svg'

export default function Info(){
    return(
        <div className='container'>
            <img src={profile} alt="profile pic" className='profilepic'/>   
            <div className='text'>
                <h2 className='name'>Ashley Smith</h2>
                <h5 className='subtitle'>Frontend Developer</h5>
                <h6 className='website'>ashleysmite.website</h6>
                <img src={mail} alt="mail" className='mail'/>
            </div>
        </div>
    )
}