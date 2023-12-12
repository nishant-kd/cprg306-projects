"use client";
import React, { useState, forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const mailtoLink = () => {
        const subject = `Message from ${formData.firstName} ${formData.lastName}`;
        const body = ` ${formData.message}`;
        return `mailto:your-ndk6830@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <footer ref={ref} className="bg-gradient-to-t from-gray-900 to-gray-700 p-14 pb-20">
            <p className='text-2xl font-semibold text-center text-white'>SAY HELLO!</p>
            <form>
                <div className='flex justify-center mt-10'>
                <div className='mt-10'>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className='border border-white rounded-md bg-gray-900 text-white p-1 pl-2 pr-2 ml-10'
                        value={formData.firstName}
                        onChange={handleChange}
                    /><br/>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className='border border-white rounded-md bg-gray-900 text-white p-1 pl-2 pr-2 mt-10 ml-10'
                        value={formData.lastName}
                        onChange={handleChange}
                    /><br/>
                </div>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className='border border-white rounded-md bg-gray-900 text-white p-1 pl-2 pr-2 ml-[120px] h-[200px] w-[250px]'
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                </div>
                <div className='flex justify-center'>
                    <a href={mailtoLink()} className='border border-white rounded-md bg-gray-900 text-white p-1 pl-3 px-4 hover hover:bg-purple-600 '>
                        Send
                    </a>
                </div>
            </form>
        </footer>
    );
});
    
Footer.displayName = 'Footer';
export default Footer;