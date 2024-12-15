import mongoose from "mongoose";
import { startServer, stopServer } from "./app";

export const setupTestEnvironment = (port: string) => {
  beforeAll(async () => {
    await startServer(port);
  });

  afterAll(async () => {
    await stopServer();
  });

  afterEach(async () => {
    const collections = await mongoose.connection.db?.collections();
    if (collections) {
      for (let collection of collections) {
        await collection.deleteMany({});
      }
    }
  });
};
