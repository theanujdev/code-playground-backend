import { Request, Response, NextFunction } from "express";
import { cookieOptions } from "../config";
import { User } from "../models";

const registerController = {
  async register(req: Request, res: Response, next: NextFunction) {
    const name = req.body.name;
    if (name) {
      // check if user exists already
      try {
        const userExist = await User.exists({ username: name });
        if (userExist) {
          // exists -> send cookie & username
          return res.cookie("user", name, cookieOptions).json({
            msg: "logged in",
          });
        } else {
          // new user -> create user with name and default values in db
          const user = new User({ username: name });
          const result = await user.save();
          return res.cookie("user", name, cookieOptions).json({
            msg: "created user",
          });
        }
      } catch (err) {
        return next({ status: 500, message: "Database error", e: err });
      }
    } else {
      return next({ status: 500, message: "No name sent" });
    }
  },
};

export default registerController;
