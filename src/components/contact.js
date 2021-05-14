import React from 'react';

  
export default function Contact({recipient}) {
    return (
        <section id="contact" className="my-24">
            <div className="container mx-auto bg-blue-primary py-11 rounded-md">
                <h2 className="text-white text-4xl text-center mb-5 text-magic phablet:text-2xl desktop:text-4xl tablet:text-5xl">Contact Our Specialists Today</h2>
                <form method="post" name="footer-form" className="px-6 tablet:px-24" netlify>
                    <input name="recipient" type="hidden" value={recipient} />
                    <div className="justify-center laptop:flex">
                        <div className="text-center flex flex-col flex-1 laptop:pr-3">
                            <input name="name" className="mb-4 rounded-sm" type="text" placeholder="Full Name*" />
                            <input name="phone" className="mb-4 rounded-sm" type="text" placeholder="Phone*" />
                            <input name="email" className="mb-4 rounded-sm" type="text" placeholder="Email*" />
                        </div>
                        <div className="text-center flex flex-col flex-1 laptop:pl-3">
                            <input name="new-customer" className="mb-4 rounded-sm" type="text" placeholder="Are You A New Customer?" />
                            <input name="message" className="mb-4 rounded-sm" type="text" placeholder="Inquiry About..." />
                            <input name="referral" className="mb-4 rounded-sm" type="text" placeholder="How Did You Hear About Us?" />
                        </div>
                    </div>
                    <button className="uppercase rounded-lg px-8 py-2 text-2xl bg-yellow-primary font-extrabold mx-auto block" type="submit" >Submit</button>
                </form>
            </div>
        </section>
    );
}



