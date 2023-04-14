import { google } from "googleapis";
import nodemailer from "nodemailer";

const GOOGLE_ID: string =
  "234489374108-p8r2abe3rmb485fp0fjavj478dqe8is7.apps.googleusercontent.com";
const GOOGLE_SECERT: string = "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";
const GOOGLE_REFRESHTOKEN: string =
  "1//04DTeMqyNo-N7CgYIARAAGAQSNwF-L9IruyXDnQ5MbwIYCSw8W7eOJVK38hCbwh1yrDVgDQfY1o8H_-4I6-zy5_AScOs4PRyFtbc";
const GOOGLE_REDIRECT: string =
  "https://developers.google.com/oauthplayground/";

//Oauth its means  open authentication

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECERT, GOOGLE_REDIRECT);

export const verifyAccount = async (user: any) => {
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
        // accessToken: getToken,
        accessToken:
          "ya29.a0Ael9sCOydrUNgpegIZfN3VgZR9BUzBGqbNwu1bA_urRHO5SWp2sJMXRdyLI6Z5sJ-PRpLPyoebljw6LJrHLm8HHaXVy_cpdc8Y2cqp-eAme_x2BGdZsETfv7YahTxLn7FDcFBzuSMG1P7on-mRq5pARacPWPLT8aCgYKAWUSARISFQF4udJh5h7rTRaFBfptrQttmNz6Fg0166",
      },
    });

    const maileroption = {
      from: " Tech Pearl ❤❤❤❤❤<ugbojudithchinemerem@gmail.com>",
      to: user.email,
      subject: "Account verification ",
      html: `<div>Welcome ${user.userName} i want you to know that am a full stack developer
      <a href = "http://localhost:9999/api/verified">verified</a>
      <br/>
      <br/>
      ${user.OTP}
      </div>`,
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
