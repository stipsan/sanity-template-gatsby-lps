const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.LP_SENDGRID_API_KEY);

exports.handler = async function(event, context, callback) {
    console.log('event:', event);
    const { name, message, email, newCustomer, recipient } = JSON.parse(event.body).payload.data;
    const msg = {
        to: recipient,
        from: email, // Use the email address or domain you verified above
        subject: `Email From LP Test - ${name}`,
        //text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>Name:</strong> ${name}
          <strong>Phone:</strong> ${phone}
          <strong>Email:</strong> ${email}
          <strong>New Customer?</strong> ${newCustomer}
          <strong>Message:</strong> ${message}`,
    };

    try {
      await sgMail.send(msg);
      return {
        statusCode: 200,
        body: 'Message sent',
      };    
    } catch (error) {
      console.log(error);
      return {
        statusCode: error.code,
        body: JSON.stringify({ msg: error.message }),
      }
    }
}