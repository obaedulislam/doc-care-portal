import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='py-12 '  style = {{
            background: `url(${footer})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
           <div className='max-w-[1250px]  mx-auto px-12'>
                <footer className="footer  text-base-content"> 
                    <div>
                        <span className="footer-title">Services</span> 
                        <Link className="link link-hover">Emergency Checkup</Link> 
                        <Link className="link link-hover">Monthly Checkup</Link> 
                        <Link className="link link-hover">Weekly Checkup</Link> 
                        <Link className="link link-hover">Deep Checkup</Link>
                    </div> 
                    <div>
                        <span className="footer-title">ORAL HEALTH</span> 
                        <Link className="link link-hover">Fluoride Treatment</Link> 
                        <Link className="link link-hover">Cavity Filling</Link> 
                        <Link className="link link-hover">Teath Whitening</Link> 
                    </div> 
                    <div>
                        <span className="footer-title">OUR ADDRESS</span> 
                        <Link className="link link-hover">New York - 101010 Hudson</Link> 
                    </div>
                </footer>
                <div className='pt-10'>
                    <p className='text-center text-black'>Copyright 2022 All Rights Reserved</p>
                </div>
           </div>
        </div>
    );
};

export default Footer;