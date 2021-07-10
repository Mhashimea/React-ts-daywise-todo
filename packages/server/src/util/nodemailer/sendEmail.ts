import nodeMailer from "nodemailer"

export default async to => {
  // , template, text, subject
  try {
    let transporter = nodeMailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "annamae.nolan60@ethereal.email",
        pass: "Shuq5Q5jVpGurXU2QB",
      },
    })

    let sendEmail = await transporter.sendMail({
      from: "annamae.nolan60@ethereal.email", // sender address
      to: to, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", sendEmail.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(sendEmail))
  } catch (e) {
    return e
  }
}
