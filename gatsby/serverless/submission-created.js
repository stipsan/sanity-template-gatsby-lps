const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.LP_SENDGRID_API_KEY);

exports.handler = async function(event, context, callback) {
    // console.log('event:', event);
    const { recipient, name, phone, email, newCustomer, message, referral } = JSON.parse(event.body).payload.data;
    const msg = {
        to: recipient,
        from: email, // Use the email address or domain you verified above
        subject: `Email From LP Test - ${name}`,
        //text: 'and easy to do anywhere, even with Node.js',
        html: `
          <strong>Name:</strong> ${name}<br/>
          <strong>Phone:</strong> ${phone}<br/>
          <strong>Email:</strong> ${email}<br/>
          <strong>New Customer?</strong> ${newCustomer}<br/>
          <strong>Referral:</strong> ${referral}<br/>
          <strong>Message:</strong> ${message}
        `,
    };

    try {
      await sgMail.send(msg);
      console.log('sent!', msg);
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