const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.LP_SENDGRID_API_KEY);

exports.handler = async function (event, context) {
  const {
    recipients,
    hasClr,
    name,
    phone,
    email,
    newCustomer,
    message,
    referral,
  } = Object.fromEntries(new URLSearchParams(event.body));

  const url = event?.headers?.referer;
  const referralField = referral
    ? `<strong>Referral:</strong> ${referral}<br />`
    : '';
  const recipientsArr = recipients.split(',').map(function (email) {
    return email.trim();
  });
  const bccRecipients = hasClr ? ['contactform@rynoss.com'] : [];
  const msg = {
    to: recipientsArr,
    bcc: bccRecipients,
    from: email, // Use the email address or domain you verified above
    subject: `PPC Form Submission - ${name}`,
    html: `
          <strong>Name:</strong> ${name}<br/>
          <strong>Phone:</strong> ${phone}<br/>
          <strong>Email:</strong> ${email}<br/>
          <strong>New Customer?</strong> ${newCustomer}<br/>
          <strong>Message:</strong> ${message}<br/>
          ${referralField}
        `,
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: 'Message sent',
    };
  } catch (error) {
    if (error.response) {
      console.error(error.response.body);
    }
    return {
      statusCode: error.code,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};