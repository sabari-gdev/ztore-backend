import express from "express";
import dotenv from "dotenv";

const app = express();

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config();
}
const PORT = process.env.PORT || 7000;

process.on("uncaughtException", (err) => {
  console.log(
    "Shutting down the server for the uncaught exception: ",
    err.message
  );
});

const server = app.listen(PORT, () => {
  console.log("Server is running at the port: ", PORT);
});

process.on("unhandledRejection", (err: Error) => {
  console.log(
    "Server is shutting down due to unhandled rejection: ",
    err.message
  );

  server.close(() => {
    process.exit(1);
  });
});
