import { CookieOptions } from "express";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const hour = 36_00_000;
export const cookieOptions: CookieOptions = {
  httpOnly: true,
  signed: true,
  secure: true,
  maxAge: 24 * hour,
};

export const { DB_URL = "", APP_PORT, COOKIE_SECRET, WEB_URL } = process.env;
