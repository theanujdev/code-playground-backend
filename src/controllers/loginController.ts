import { Request, Response, NextFunction } from "express";
import { cookieOptions } from "../config";
import { User } from "../models";

const loginController = {
  async login(req: Request, res: Response, next: NextFunction) {
    const name = req.signedCookies.user;
    if (!name) {
      // case : new user (or user has deleted the cookie)
      return res.send({ msg: "No user logged in" });
    } else {
      const userExist = await User.exists({ username: name });
      if (!userExist) {
        // case : no user with that cookie -> delete client cookie
        return res
          .cookie("user", "", { expires: new Date(0) })
          .json({ msg: "User don't exist" });
      } else {
        return res.cookie("user", name, cookieOptions).json({ username: name });
      }
    }
  },
  async logout(req: Request, res: Response, next: NextFunction) {
    return res
      .cookie("user", "", { expires: new Date(0) })
      .json({ msg: "logout" });
  },
};

export default loginController;
