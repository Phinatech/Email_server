import express, { Request, Response } from "express";

import { userModel } from "../Model/Usermodel";

//creating a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;
    const creating = await userModel.create({
      userName,
      email,
      password,
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

//view user
export const getUser = async (req: Request, res: Response) => {
  try {
    const creating = await userModel.find();

    return res.status(200).json({
      message: `All user Sucessfully gotten ${creating.length}`,
      data: creating,
    });
  } catch (error) {
    res.status(404).json({
      message: "an error occured",
    });
  }
};

//view single user
export const singleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userName } = req.body;
    const creating = await userModel.findByIdAndUpdate(id);
    return res.status(200).json({
      message: "updated Sucessfully",
      data: creating,
    });
  } catch (error) {
    res.status(404).json({
      message: "an error occured",
    });
  }
};

// update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userName } = req.body;
    const creating = await userModel.findByIdAndUpdate(
      id,
      {
        userName,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "updated Sucessfully",
      data: creating,
    });
  } catch (error) {
    res.status(404).json({
      message: "an error occured",
    });
  }
};

//delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userName } = req.body;
    const creating = await userModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "deleted Sucessfully",
      data: creating,
    });
  } catch (error) {
    res.status(404).json({
      message: "an error occured",
    });
  }
};
//verify user

//request reset password

//reset password
