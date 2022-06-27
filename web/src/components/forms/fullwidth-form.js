import classNames from 'classnames';
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
        referral: {
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
    const { recipients, isSplit, hasClr } = this.props;
    return (
      <form
        name="Fullwidth Form"
        method="POST"
        className="text-gray-alt relative w-full"
        data-netlify="true"
        ref={this.domRef}
        id="form"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <input type="hidden" name="form-name" value="Fullwidth Form" />
        <input type="hidden" name="recipients" value={recipients} />
        <input type="hidden" name="hasClr" value={hasClr} />
        <div
          className={classNames(`justify-center`, {
            'laptop:flex laptop:gap-7': isSplit,
          })}
        >
          <div className={`text-center flex flex-col flex-1`}>
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
              />
            </div>
          </div>
          <div className={`text-center flex flex-col flex-1`}>
            {/* <TextInput
              name="newCustomer"
              placeholder="Are You A New Customer?"
              value={this.state.fields.newCustomer.value}
              updateField={this.updateField}
            /> */}
            <select
              name="newCustomer"
              className="mb-4 w-full border-none text-gray-500"
              onChange={(e) => this.updateField(e)}
              value={this.state.fields.newCustomer.value}
            >
              <option value="" disabled>Are you a new customer?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <TextInput
              name="message"
              placeholder="Inquiry About..."
              value={this.state.fields.message.value}
              updateField={this.updateField}
            />
            <TextInput
              name="referral"
              placeholder="How did you hear about us?"
              value={this.state.fields.referral.value}
              updateField={this.updateField}
            />
          </div>
        </div>
        <SubmitButton
          text={'Submit'}
          className={'button--primary block mx-auto mt-3 text-[22px]'}
        />
        <FeedbackBox
          className={`bottom-14 ${
            this.state.showFeedback ? 'inline-block' : 'hidden'
          } ${this.state.hasErrors ? 'border-red-600' : 'border-emerald-600'}`}
          feedbackList={this.state.feedback}
          hideFeedback={this.hideFeedback}
        />
      </form>
    );
  }
}
