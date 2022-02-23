import validator from 'validator';

export function updateField(event) {
  const field = event.target.name;
  const value = event.target.value;
  const updatedFields = this.state.fields;

  if (field === 'name') {
    updatedFields[field].valid = !validator.isEmpty(value);
  }
  if (field === 'email') {
    updatedFields.email.valid =
      validator.isEmail(value) && !validator.isEmpty(value);
  }
  if (field === 'phone') {
    updatedFields.phone.valid =
      validator.isMobilePhone(value) && !validator.isEmpty(value);
  }

  updatedFields[field].value = value;
  this.setState(updatedFields);
}

export function flashFeedback(feedback) {
  const newFeedback = [feedback];
  this.setState(
    {
      feedback: newFeedback,
      showFeedback: true,
    },
    () => setTimeout(this.hideFeedback, 5000)
  ); //hide feedback panel after 5 seconds
}

export function hideFeedback() {
  this.setState({
    feedback: [],
    showFeedback: false,
  });
}

export function handleFetchErrors(response) {
  if (!response.ok) {
    this.setState({
      hasErrors: true,
    });
    throw Error(response.statusText);
  }
  return response;
}

export function handleSubmit(event) {
  event.preventDefault(); //stop form from submitting via http
  let validForm = Object.keys(this.state.fields).every(
    (field) => this.state.fields[field].valid
  ); // checks if all form field are currently valid
  this.setState({
    submitted: true,
  });

  if (validForm) {
    let formData = new FormData(event.target);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(this.handleFetchErrors) //extra step due to error handling with Fetch
      .then(() => {
        this.setState(
          {
            hasErrors: false,
          },
          () => {
            this.triggerEvent('formSubmitted', 'RYNO LP Conversion', 'footer');
            this.flashFeedback('Form Submitted Successfully!');
            this.resetForm();
          }
        );
      })
      .catch((error) => {
        this.setState(
          {
            hasErrors: true,
          },
          () => {
            this.flashFeedback('Form Submission Error!');
          }
        );
      });
  }
}

export function resetForm() {
  let resetFields = this.state.fields;
  Object.keys(this.state.fields).forEach((field) => {
    resetFields[field].value = '';
    resetFields[field].valid = false;
  });
  this.setState(
    {
      fields: resetFields,
      submitted: false,
      hasErrors: false,
    },
    () => {
      this.domRef.current.reset(); //clear form fields
    }
  );
}

export function toggleValidationBox(field) {
  return !this.state.fields[field].valid && this.state.submitted
    ? 'inline-block'
    : 'hidden';
}

export function triggerEvent(action, category, label) {
  try {
    if (window.dataLayer !== undefined) {
      window.dataLayer.push({
        event: action,
        category: category,
        label: label,
      });
    }
    console.log('events triggered');
  } catch {
    console.log('Error');
  }
}
