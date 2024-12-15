import bodyParser from "body-parser";
import express from "express";
import { Server } from "http";
import mongoose from "mongoose";
import cors from "cors";
import recommendationsRouter from "./routes/recommendations";
import usersRouter from "./routes/users";
import { connectDB, disconnectDB } from "./utils/database";

const app = express();
const PORT = process.env.PORT || "8008";
let server: Server | null = null;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use("/recommendations", recommendationsRouter);
app.use("/users", usersRouter);

export const startServer = async (port: string) => {
  await connectDB();
  server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

export const stopServer = async () => {
  if (server) {
    server.close(() => {
      console.log("Server stopped");
    });
    server = null;
  }
  await disconnectDB();
};

startServer(PORT);

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

export default app;
