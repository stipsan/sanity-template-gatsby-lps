import React from 'react';

export default function SidebarForm({recipient}) {
    //const logo = getGatsbyImageData(logo);
    return (
        <form name="Sidebar Form" method="POST" className="flex justify-center flex-col" data-netlify="true">
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
                className="rounded-md"
                name="message"
                id=""
                rows="3"
                cols="25"
                placeholder="Message"
            ></textarea>
            <input
                className="uppercase rounded-lg px-8 py-2 text-2xl bg-yellow-primary font-extrabold mx-auto absolute -bottom-6 left-20"
                type="submit"
                value="Submit"
            />
        </form>
    );
}
