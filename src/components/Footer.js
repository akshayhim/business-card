import React from 'react';
import FB from '../images/FacebookIcon.svg';
import GH from '../images/GitHubIcon.svg';
import IG from '../images/Instagram Icon.svg';
import LD from '../images/Linkedin Icon.svg';

export default function Footer() {
    return(
        <footer className='container4'>
            <img src={FB} alt="fb" />
            <img src={GH} alt="gh" />
            <img src={IG} alt="ig" />
            <img src={LD} alt="ld" />
        </footer>
    )
}