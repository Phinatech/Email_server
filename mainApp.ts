import express, { Application } from "express";

import cors from "cors";

export const mainApp = async (app: Application) => {
  app.use(cors());
  app.use(express.json());
};
