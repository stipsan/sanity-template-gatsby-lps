const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.LP_SENDGRID_API_KEY);

exports.handler = async function (event, context, callback) {
  const { recipients, name, phone, email, newCustomer, message, referral } =
    JSON.parse(event.body).payload.data;
  const referralField = referral
    ? `<strong>Referral:</strong> ${referral}`
    : '';
  const recipientsArr = recipients.split(",").map(function(email) {
    return email.trim();
  });
  const msg = {
    to: recipientsArr,
    bcc: ['contactform@rynoss.com'],
    from: email, // Use the email address or domain you verified above
    subject: `PPC Form Submission - ${name}`,
    //text: 'and easy to do anywhere, even with Node.js',
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
