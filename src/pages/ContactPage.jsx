import React, { useState } from 'react';
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { ContactForm,ContactInfo } from '../components/Contact';
import { GiFizzingFlask } from 'react-icons/gi';

const ContactPage = () => {
    const contactMethods = [
        { icon: <IoMdMail />, contact: "Support@example.com" },
        { icon: <FaLocationDot/>, contact: "Mountain View, California, United States." },
    ];

    return (
        <main className="py-14 mt-20">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-center lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have. We look forward to hearing from you! Please fill out the form or use the contact information below.
                        </p>
                        {contactMethods.map((item, idx) => (
                          <ContactInfo key={idx} {...item} />
                        ))}
                    </div>
                    <div className="flex-1 mt-12 lg:mt-0 sm:max-w-lg lg:max-w-md">
                       <ContactForm/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
