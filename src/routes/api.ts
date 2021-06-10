import express from "express";
import { loginController, registerController } from "../controllers";

const router = express.Router();

router.get("/login", loginController.login);
router.get("/logout", loginController.logout);
router.post("/register", registerController.register);

export default router;
