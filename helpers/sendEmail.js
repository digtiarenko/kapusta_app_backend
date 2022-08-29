const nodemailer = require("nodemailer");
require("dotenv").config();

const {EMAIL_VERIFICATION, PASSWORD_VERIFICATION } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_VERIFICATION,
    pass: PASSWORD_VERIFICATION,
  },
  tls: {
    rejectUnauthorized: false
}
};
const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: EMAIL_VERIFICATION };
    await transporter.sendMail(email);
    return true;
  } catch (error) {
    throw error;
  }
};


/* const sgMail = require("@sendgrid/mail");

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    try {
        const email = {...data, from: "tanyalegois@meta.ua"};
        await sgMail.send(email);
        return true;
    } catch (error) {
        throw error;
    }
} */
 

module.exports = sendEmail;
