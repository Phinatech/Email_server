import express from "express";
import mongoose from "mongoose";

const app: Application = express();

const server = app.listen(999, () => {
  console.log("Server is up and running");
});

process.on("unhandledRejection", (error: Error) => {
  console.log("shutting down server uncaughht exeption");
  console.log(error);
});
process.exit;
