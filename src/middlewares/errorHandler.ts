import { Request, Response, NextFunction } from "express";

function errorHandler(
  error: { status: number; message: string; e?: Error },
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV !== "production") {
    if (error.e) console.log("Error :", error.e);
  }
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  res.status(status).send({
    status,
    message,
  });
}

export default errorHandler;
