import React from 'react';

const ContactInfo = ({ icon, contact }) => (
    <li className="flex items-center gap-x-3">
        <div className="flex-none text-gray-400">{icon}</div>
        <p>{contact}</p>
    </li>
);

export default ContactInfo;
