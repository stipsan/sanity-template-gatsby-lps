import React from 'react';
import SubmitButton from '../utils/submitButton';

export default function FullwidthForm({recipient}) {
    //const logo = getGatsbyImageData(logo);
    return (
        <form name="Fullwidth Form" method="POST" className="px-6 text-gray-alt tablet:px-24" data-netlify="true">
            <input
                type="hidden"
                name="form-name"
                value="Fullwidth Form"
            />
            <input
                type="hidden"
                name="recipient"
                value={recipient}
            />
            <div className="justify-center laptop:flex">
                <div className="text-center flex flex-col flex-1 laptop:pr-3">
                    <input name="name" className="mb-4 rounded-sm" type="text" placeholder="Full Name*" />
                    <input name="phone" className="mb-4 rounded-sm" type="text" placeholder="Phone*" />
                    <input name="email" className="mb-4 rounded-sm" type="text" placeholder="Email*" />
                </div>
                <div className="text-center flex flex-col flex-1 laptop:pl-3">
                    <input name="newCustomer" className="mb-4 rounded-sm" type="text" placeholder="Are You A New Customer?" />
                    <input name="message" className="mb-4 rounded-sm" type="text" placeholder="Inquiry About..." />
                    <input name="referral" className="mb-4 rounded-sm" type="text" placeholder="How Did You Hear About Us?" />
                </div>
            </div>
            <SubmitButton text={'Submit'} className={'button--primary block mx-auto mt-3'} />
        </form>
    );
}
