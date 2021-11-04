import React from 'react';
import SubmitButton from '../utils/submitButton';

export default function SidebarForm({recipient}) {
    //const logo = getGatsbyImageData(logo);
    return (
        <form
            name="Sidebar Form"
            method="POST"
            className="flex justify-center flex-col text-gray-alt min-w-275"
            data-netlify="true"
        >
            <input
                type="hidden"
                name="form-name"
                value="Sidebar Form"
            />
            <input
                type="hidden"
                name="recipient"
                value={recipient}
            />
            <input
                className="w-full mb-3 rounded-md"
                type="text"
                name="name"
                placeholder="Name*"
            />
            <input
                className="w-full mb-3 rounded-md"
                type="text"
                name="phone"
                placeholder="Phone Number*"
            />
            <input
                className="w-full mb-3 rounded-md"
                type="text"
                name="email"
                placeholder="Email Address*"
            />
            <input
                className="w-full mb-3 rounded-md"
                type="text"
                name="newCustomer"
                placeholder="Are You a New Customer?"
            />
            <textarea
                className="rounded-md mb-4"
                name="message"
                id=""
                rows="3"
                cols="25"
                placeholder="Message"
            ></textarea>
            <SubmitButton text={'Submit'} className={'button--primary inline-block mx-auto mb-[-70px]'} />
        </form>
    );
}
