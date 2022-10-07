import React from 'react';
import SubmitButton from '../utils/submitButton';
import TextInput from './text-input';
import ValidationBox from './validation-box';
import FeedbackBox from './feedback-box';
import {
  handleSubmit,
  updateField,
  flashFeedback,
  hideFeedback,
  triggerEvent,
  handleFetchErrors,
  toggleValidationBox,
  resetForm,
} from './form-utils';

export default class SidebarForm extends React.Component {
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
          valid: false,
        },
        phone: {
          value: '',
          valid: false,
        },
        email: {
          value: '',
          valid: false,
        },
        newCustomer: {
          value: '',
          valid: true,
        },
        message: {
          value: '',
          valid: true,
        },
      },
    };
    this.updateField = updateField.bind(this);
    this.flashFeedback = flashFeedback.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.hideFeedback = hideFeedback.bind(this);
    this.triggerEvent = triggerEvent.bind(this);
    this.handleFetchErrors = handleFetchErrors.bind(this);
    this.toggleValidationBox = toggleValidationBox.bind(this);
    this.resetForm = resetForm.bind(this);
  }

  render() {
    const { recipients, hasClr } = this.props;
    return (
      <form
        name="Sidebar Form"
        method="POST"
        className="flex justify-center flex-col text-gray-alt min-w-275 min-w-0"
        data-netlify="true"
        ref={this.domRef}
        id="form"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <input type="hidden" name="form-name" value="Sidebar Form" />
        <input type="hidden" name="recipients" value={recipients} />
        <input type="hidden" name="hasClr" value={hasClr} />
        <div className="relative">
          <ValidationBox
            className={this.toggleValidationBox('name')}
            message="Name is required"
          />
          <TextInput
            name="name"
            placeholder="Full Name*"
            value={this.state.fields.name.value}
            updateField={this.updateField}
            classNames="rounded-md"
          />
        </div>
        <div className="relative">
          <ValidationBox
            className={this.toggleValidationBox('phone')}
            message="Phone is invalid"
          />
          <TextInput
            name="phone"
            placeholder="Phone*"
            value={this.state.fields.phone.value}
            updateField={this.updateField}
            classNames="rounded-md"
          />
        </div>
        <div className="relative">
          <ValidationBox
            className={this.toggleValidationBox('email')}
            message="Email is invalid"
          />
          <TextInput
            name="email"
            placeholder="Email*"
            value={this.state.fields.email.value}
            updateField={this.updateField}
            classNames="rounded-md"
          />
        </div>
        {/* <TextInput
          name="newCustomer"
          placeholder="Are You A New Customer?"
          value={this.state.fields.newCustomer.value}
          updateField={this.updateField}
          classNames="rounded-md"
        /> */}
        <select
          name="newCustomer"
          className="mb-4 w-full border-none rounded-md text-gray-500"
          onChange={(e) => this.updateField(e)}
          value={this.state.fields.newCustomer.value}
        >
          <option value="" disabled>Are you a new customer?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <textarea
          className="rounded-md mb-4 border-none resize-none max-w-[275px]"
          name="message"
          ref="message"
          rows="3"
          cols="25"
          placeholder="Message"
        ></textarea>
        <SubmitButton
          text={'Submit'}
          className={'button--primary inline-block mx-auto mb-[-70px]'}
        />
        <FeedbackBox
          className={`bottom-10 ${
            this.state.showFeedback ? 'inline-block' : 'hidden'
          } ${this.state.hasErrors ? 'border-red-600' : 'border-emerald-600'}`}
          feedbackList={this.state.feedback}
          hideFeedback={this.hideFeedback}
        />
      </form>
    );
  }
}
