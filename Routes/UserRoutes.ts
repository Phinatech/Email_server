import express, { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  singleUser,
  updateUser,
} from "../Controller/userController";

const router = Router();

router.route("/").get(getUser);
router.route("/:id").get(singleUser);
router.route("/:id").patch(updateUser);
router.route("/:id").delete(deleteUser);
router.route("/create").post(createUser);

export default router;
