import React from 'react';
import whiteLogo from '../../../Assets/logo/white-logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-800 text-white">
            <div>
                <img src={whiteLogo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="font-bold text-white text-2xl">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="font-bold text-white text-2xl">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="font-bold text-white text-2xl">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                
            </div>
        </footer>
    );
};

export default Footer;