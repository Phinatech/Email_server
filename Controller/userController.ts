import express, { Request, Response } from "express";

import { userModel } from "../Model/Usermodel";

//creating a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { UserName, email, password, token, verified } = req.body;
    const creating = await userModel.create({
      UserName,
      email,
      password,
      token,
      verified,
    });
    return res.status(200).json({
      message: "Sucessfully created ",
      data: creating,
    });
  } catch (error) {
    res.status(404).json({
      message: "an error occured",
    });
  }
};
