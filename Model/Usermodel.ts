import mongoose, { model } from "mongoose";

interface Iuser {
  UserName: string;
  email: string;
  password: string;
  token: string;
  verified: boolean;
}
interface IuserData extends Iuser, Document {}

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
    verified: {
      type: String,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model<IuserData>("users", userSchema);
