import express, { Application } from "express";
import { mainApp } from "./mainApp";
import mongoose from "mongoose";
import { DbcONNECT } from "./Db";

const app: Application = express();

const Port = 9999;

mainApp(app);
DbcONNECT();

const server = app.listen(Port, () => {
  console.log("Server is up and running");
});

process.on("uncaughtException", (error: Error) => {
  console.log("shutting down server uncaughht exeption");
  console.log(error);

  process.exit(1);
});

process.on("unhandledRejection", (error: Error) => {
  console.log("shutting down server uncaughht exeption");
  console.log(error);

  server.close(() => {
    process.exit(1);
  });
});
