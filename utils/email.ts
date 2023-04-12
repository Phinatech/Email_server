import { google } from "googleapis";
import nodemailer from "nodemailer";

const GOOGLE_ID: string =
  "234489374108-p8r2abe3rmb485fp0fjavj478dqe8is7.apps.googleusercontent.com";
const GOOGLE_SECERT: string = "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";
const GOOGLE_REFRESHTOKEN: string =
  "1//04sr06SWpAEH6CgYIARAAGAQSNwF-L9Iret73r_QTEryFE0cT6uUdtLkd-mhbnbVAlOZXSdDIfMTBVh9Ao32DbPHdHzD4FdHBa-w";
const GOOGLE_REDIRECT: string =
  "https://developers.google.com/oauthplayground/";

//Oauth its means  open authentication

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECERT, GOOGLE_REDIRECT);

export const verifyAccount = async () => {
  try {
    oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });
    const getToken: any = (await oAuth.getAccessToken()).token;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "ugbojudithchinemerem@gmail.com",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECERT,
        refreshToken: GOOGLE_REFRESHTOKEN,
        accessToken: getToken,
      },
    });

    const maileroption = {
      from: " Tech Pral ❤❤❤❤❤<ugbojudithchinemerem@gmail.com>",
      to: "sendEmail",
      subject: "Account verification ",
      html: `<div>Welcome</div>`,
    };
    transporter
      .sendMail(maileroption)
      .then(() => {
        console.log("Email sent");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
