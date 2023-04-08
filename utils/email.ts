import { google } from "googleapis";
import nodemailer from "nodemailer";

const GOOGLE_ID: string = "";
const GOOGLE_SECERT: string = "";
const GOOGLE_REFRESHTOKEN: string = "";
const GOOGLE_REDIRECT: string = "";

//Oauth its means  open authentication

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECERT, GOOGLE_REDIRECT);

export const verifyAccount = async () => {
  try {
    oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });
    const getToken: any = oAuth.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        clientId: GOOGLE_ID,
        ckientSeccret: GOOGLE_SECERT,
        refreshToken: GOOGLE_REFRESHTOKEN,
        accessToken: getToken?.token!,
      },
    });

    const maileroption = {
      from: " Tech Pral ❤❤❤❤❤<Our Email>",
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
