import React from 'react';
import EmailForm from '../components/forms/EmailForm';

const Contact = (props) => {
    return (
        <section className="main-content-section" id="contact-section">
            <h2 className="main-content-section-header">Contact</h2>
            <div className="main-content-section-body">
                <EmailForm />
            </div >
        </ section>
    );
};

export default Contact;