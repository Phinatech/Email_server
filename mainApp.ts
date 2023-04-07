import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./Routes/UserRoutes";

export const mainApp = async (app: Application) => {
  app
    .use(cors())
    .use(express.json())

    .use("/api/users", userRoutes);
};
