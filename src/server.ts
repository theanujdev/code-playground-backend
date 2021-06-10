import express from "express";
import helmet from "helmet";
import cors from "cors";
import { APP_PORT, COOKIE_SECRET, DB_URL, WEB_URL } from "./config";
import cookieParser from "cookie-parser";
import Socketio from "./utils/socket.class";
import errorHandler from "./middlewares/errorHandler";
import apiRoute from "./routes/api";
import database from "./utils/dbUtil";

const app = express();

database.connectToDB(DB_URL);

app.use(express.json());
app.use(cors({ origin: WEB_URL, credentials: true }));
app.use(helmet());
app.use(cookieParser(COOKIE_SECRET));

app.use("/api", apiRoute);
app.use(errorHandler);

const server = app.listen(APP_PORT, () =>
  console.log(`Server started on port ${APP_PORT}`)
);

const socket = new Socketio(server);
socket.listen();
