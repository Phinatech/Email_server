import express, { Application, Request, Response } from "express";
import { mainApp } from "./mainApp";
import { DbcONNECT } from "./Config/Db";

const app: Application = express();

const Port = 8999;

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Server is listening",
  });
});

mainApp(app);
DbcONNECT();

const server = app.listen(Port, () => {
  console.log("Server is up and running:", Port);
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
