import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./Routes/UserRoutes";
import morgan from "morgan";

export const mainApp = async (app: Application) => {
  app
    .use(cors())
    .use(express.json())
    .use(morgan("dev"))

    .use("/api/users", userRoutes);
};
