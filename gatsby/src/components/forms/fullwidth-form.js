import React from 'react';
import SubmitButton from '../utils/submitButton';
import validator from 'validator';


export default class FullwidthForm extends React.Component {
    constructor(props) {
        super(props);
        this.domRef = React.createRef();
        this.state = {
            feedback: [],
            showFeedback: false,
            submitted: false,
            hasErrors: false,
            fields: {
                name: {
                    value: '',
                    valid: false
                },
                phone: {
                    value: '',
                    valid: false
                },
                email: {
                    value: '',
                    valid: false
                }
            },
        }
        this.updateField = this.updateField.bind(this);
        this.hideFeedback = this.hideFeedback.bind(this);
        this.handleFetchErrors = this.handleFetchErrors.bind(this);
    }

    updateField(event){
        const field = event.target.name;
        const value = event.target.value;
        const updatedFields = this.state.fields;

        if (field === 'name') {
            updatedFields[field].valid = !validator.isEmpty(value); 
        }
        if (field === 'email'){
            updatedFields.email.valid = validator.isEmail(value) && !validator.isEmpty(value);
        }
        if (field === 'phone'){
            updatedFields.phone.valid = validator.isMobilePhone(value) && !validator.isEmpty(value);
        }

        updatedFields[field].value = value;
        this.setState(updatedFields);
    }

    triggerEvent(action, category, label){
        try {
            if (window.ga !== undefined){
                const trackerName = window.ga.getAll()[0].get('name');
                window.ga(trackerName + '.send', 'event', {
                    'eventAction': action,
                    'eventCategory': category,
                    'eventLabel': label
                });
                console.log(action, category, label)
            }
            if (window.dataLayer !== undefined){
                window.dataLayer.push({
                    'event': action,
                    'category': category,
                    'label': label,
                });
            }
            console.log('events triggered')
        } catch {
            console.log('oops')
        }
    }

    flashFeedback(feedback) {
        const newFeedback = [feedback];
        this.setState({
            feedback: newFeedback,
            showFeedback: true
        }, () => setTimeout(this.hideFeedback, 5000)); //hide feedback panel after 5 seconds
    }
    
    hideFeedback() {
        this.setState({
            feedback: [],
            showFeedback: false
        });
    }

    resetForm(){
        let resetFields = this.state.fields;
        Object.keys(this.state.fields).forEach((field) => {
            resetFields[field].value = '';
            resetFields[field].valid = false;
        });
        this.setState({
            fields: resetFields,
            submitted: false,
            hasErrors: false
        }, () => {
            this.domRef.current.reset(); //clear form fields
        });
    }

    handleFetchErrors(response){
        if (!response.ok) {
            this.setState({
                hasErrors: true,
            });
            throw Error(response.statusText);
        }
        return response;
    }

    handleSubmit(event) {
        event.preventDefault(); //stop form from submitting via http
        let validForm = Object.keys(this.state.fields).every((field) => this.state.fields[field].valid); // checks if all form field are currently valid
        this.setState({
            submitted: true
        })

        if (validForm) {
            let formData = new FormData(event.target);
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(this.handleFetchErrors) //extra step due to error handling with Fetch
            .then(() => {
                this.setState({
                    hasErrors: false,
                }, () => {
                    this.triggerEvent('formSubmission', 'RYNO LP Conversion', 'footer');
                    this.flashFeedback('Form Submitted Successfully!');
                    this.resetForm();
                });
            }).catch((error) => {
                this.setState({
                    hasErrors: true,
                }, () => {
                    this.flashFeedback('Form Submission Error!');
                });
            });
        }
    }
    
    //const logo = getGatsbyImageData(logo);
    render() {
        const { recipient } = this.props;
        return (
            <form
                name="Fullwidth Form"
                method="POST"
                className="px-6 text-gray-alt tablet:px-24"
                data-netlify="true"
                ref={this.domRef}
                id="form"
                onSubmit={event => this.handleSubmit(event)}
            >
                <input
                    type="hidden"
                    name="form-name"
                    ref="form-name"
                    value="Fullwidth Form"
                />
                <input
                    type="hidden"
                    name="recipient"
                    ref="recipient"
                    value={recipient}
                />
                <div className="justify-center laptop:flex">
                    <div className="text-center flex flex-col flex-1 laptop:pr-3">
                        <div className="relative">
                            <span className={`text-red-500 absolute -top-4 right-1 px-2 bg-white rounded-sm border-red-500 border-solid border-2 ${!this.state.fields.name.valid && this.state.submitted ? 'inline-block' : 'hidden'}`}>Name is required</span>
                            <input
                                name="name"
                                ref="name"
                                type="text"
                                className="mb-4 rounded-sm w-full"
                                placeholder="Full Name*"
                                onChange={ event => this.updateField(event) }
                            />
                        </div>
                        <div className="relative">
                            <span className={`text-red-500 absolute -top-4 right-1 px-2 bg-white rounded-sm border-red-500 border-solid border-2 ${!this.state.fields.phone.valid && this.state.submitted ? 'inline-block' : 'hidden'}`}>Phone is invalid</span>
                            <input
                                name="phone"
                                ref="phone"
                                className="mb-4 rounded-sm w-full"
                                type="text"
                                placeholder="Phone*"
                                onChange={ event => this.updateField(event) }
                            />
                        </div>
                        <div className="relative">
                            <span className={`text-red-500 absolute -top-4 right-1 px-2 bg-white rounded-sm border-red-500 border-solid border-2 ${!this.state.fields.email.valid && this.state.submitted ? 'inline-block' : 'hidden' }`}>Email is invalid</span>
                            <input
                                name="email"
                                ref="email"
                                className="mb-4 rounded-sm w-full"
                                type="text"
                                placeholder="Email*"
                                onChange={ event => this.updateField(event) }
                            />
                        </div>
                    </div>
                    <div className="text-center flex flex-col flex-1 laptop:pl-3">
                        <input name="newCustomer" ref="newCustomer" className="mb-4 rounded-sm" type="text" placeholder="Are You A New Customer?" />
                        <input name="message" ref="message" className="mb-4 rounded-sm" type="text" placeholder="Inquiry About..." />
                        <input name="referral" ref="referral" className="mb-4 rounded-sm" type="text" placeholder="How Did You Hear About Us?" />
                    </div>
                </div>
                {/* <div className="relative">
                    <span className={`text-red-500 absolute -top-4 right-1 px-2 bg-white rounded-sm border-red-500 border-solid border-2 ${!this.state.fields.name.valid && this.state.submitted ? 'inline-block' : 'hidden'}`}>Name is required</span>
                    <input
                        className="w-full mb-3 rounded-md"
                        type="text"
                        name="name"
                        ref="name"
                        placeholder="Name*"
                        onChange={ event => this.updateField(event) } 
                    />
                </div>
                <div className="relative">
                    <span className={`text-red-500 absolute -top-4 right-1 px-2 bg-white rounded-sm border-red-500 border-solid border-2 ${!this.state.fields.phone.valid && this.state.submitted ? 'inline-block' : 'hidden'}`}>Phone is invalid</span>
                    <input
                        className="w-full mb-3 rounded-md"
                        type="text"
                        name="phone"
                        ref="phone"
                        placeholder="Phone Number*"
                        onChange={ event => this.updateField(event) }
                    />
                </div>
                <div className="relative">
                    <span className={`text-red-500 absolute -top-4 right-1 px-2 bg-white rounded-sm border-red-500 border-solid border-2 ${!this.state.fields.email.valid && this.state.submitted ? 'inline-block' : 'hidden' }`}>Email is invalid</span>
                    <input
                        className="w-full mb-3 rounded-md"
                        type="text"
                        name="email"
                        ref="email"
                        placeholder="Email Address*"
                        onChange={ event => this.updateField(event) }
                    />
                </div>
                <input
                    className="w-full mb-3 rounded-md"
                    type="text"
                    name="newCustomer"
                    ref="newCustomer"
                    placeholder="Are You a New Customer?"
                />
                <textarea
                    className="rounded-md mb-4"
                    name="message"
                    ref="message"
                    id=""
                    rows="3"
                    cols="25"
                    placeholder="Message"
                ></textarea> */}
                <SubmitButton text={'Submit'} className={'button--primary block mx-auto mt-3 text-[22px]'} />
                <div className={`absolute bottom-10 left-0 w-full bg-white border-8 p-4 text-center z-10 font-extrabold ${this.state.showFeedback  ? 'inline-block' : 'hidden'} ${this.state.hasErrors ? 'border-red-600' : 'border-green-600' }`}>
                    <span
                        role="button"
                        tabIndex={0}
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={this.hideFeedback}
                        onKeyDown={this.hideFeedback}>&#10006;</span>
                    <ul>{this.state.feedback.map( (item, index) => {
                        return <li key={index}>{item}</li>
                    })}</ul>
                </div>
            </form>
        )
    };
}
