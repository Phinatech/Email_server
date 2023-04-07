import {google} from "googleapi"
import nodemailer from "nodemailer"

const GOOGLE_ID: string  = ""
const GOOGLE_SECERT: string  = ""
const GOOGLE_REFRESHTOKEN: string  = ""
const GOOGLE_REDIRECT: string  = ""


//Oauth openauthentication

const oAuth = new google.auth.oAuth2
(GOOGLE_ID,GOOGLE_SECERT,GOOGLE_REDIRECT)

export const VerifyAccount =async () => {
    try {
        oAuth.setCredentials({access_token:})
   
} catch{

}
}