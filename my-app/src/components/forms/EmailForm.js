import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

const EmailForm = (props) => {
    const [name, setName] = useState({
        value: '',
        hasError: false,
        touched: false,
    });

    const [email, setEmail] = useState({
        value: '',
        hasError: false,
        touched: false,
    });

    const [message, setMessage] = useState({
        value: '',
        hasError: false,
        touched: false,
    });

    const [validate, setValidate] = useState({
        isValidated: true,
    });

    const [submit, setSubmit] = useState({
        isSubmitted: false,
    })

    const handleChange = (e) => {
        const inputValue = e.target.value.trim();
        let hasError = false;
        setValidate({ isValidated: true });
        setSubmit({ isSubmitted: false });

        switch (e.target.id) {
            case 'name':
                if (!inputValue) {
                    hasError = true;
                };

                setName(currentValue => ({
                    ...currentValue,
                    value: e.target.value,
                    hasError,
                }))
                break;
            case 'email':
                if (
                    !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(inputValue)
                ) {
                    hasError = true;
                };

                setEmail(currentValue => ({
                    ...currentValue,
                    value: e.target.value,
                    hasError,
                }))
                break;
            case 'message':
                if (!inputValue) {
                    hasError = true;
                };

                setMessage(currentValue => ({
                    ...currentValue,
                    value: e.target.value,
                    hasError,
                }))
                break;
            default:
                break;
        };
    };

    const handleBlur = (e) => {
        const input = e.target;

        switch (input.id) {
            case 'name':
                setName(currentValue => ({
                    ...currentValue,
                    touched: true,
                }));
                break;
            case 'email':
                setEmail(currentValue => ({
                    ...currentValue,
                    touched: true,
                }));
                break;
            case 'message':
                setMessage(currentValue => ({
                    ...currentValue,
                    touched: true,
                }));
                break;
            default:
                break;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.value && email.value && message.value) {
            setValidate({ isValidated: true });

            const dataToSend = {
                from_name: name.value,
                to_name: 'Daniel',
                reply_to: email.value,
                message: message.value,
            }

            send(
                'service_wq7c0z7',
                'template_y11qyut',
                dataToSend,
                '3J8U1TyVKk6umCgFk'
            )
                .then((response) => {
                    setSubmit({ isSubmitted: true });
                    setName({
                        value: '',
                        hasError: false,
                        touched: false,
                    });
                    setEmail({
                        value: '',
                        hasError: false,
                        touched: false,
                    });
                    setMessage({
                        value: '',
                        hasError: false,
                        touched: false,
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else {
            setValidate({ isValidated: false });
        };
    };

    return (
        <form id="email-form" onSubmit={handleSubmit}>
            <div className="form-group mb-4">
                <label className="mb-2">Name</label>
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {name.touched && name.hasError && <div className="error-message mt-2">📛 Name is required</div>}

            </div>
            <div className="form-group mb-4">
                <label className="mb-2">Email Address</label>
                <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {email.touched && email.hasError && <div className="error-message mt-2">📧 Please enter a valid email address</div>}
            </div>
            <div className="form-group mb-4">
                <label className="mb-2">Message</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={message.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {message.touched && message.hasError && <div className="error-message mt-2">💬 Message is required</div>}
            </div>
            <div className="form-group mb-4" id="form-btn-container">
                <button className="outlined-button" id="send-message-button" type="submit">Send</button>
                {submit.isSubmitted && <div className="error-message mt-2">📧 Your message has been successfully sent!</div>}
                {!validate.isValidated && <div className="error-message mt-2">📝 Please fill out the form correctly</div>}
            </div>
        </ form>
    );
};

export default EmailForm;