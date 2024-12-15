import request from "supertest";
import app from "./app";
import { setupTestEnvironment } from "./test-helper";

setupTestEnvironment("9001");

describe("POST /recommendations", () => {
  it("should generate and save recommendations", async () => {
    const user_id = "test_user";
    const response = await request(app)
      .post("/recommendations")
      .send({
        user_id,
        preferences: [
          "science fiction",
          "artificial intelligence",
          "space exploration",
        ],
      });

    expect(response.status).toBe(200);
    expect(response.body.user_id).toBe(user_id);
    expect(Array.isArray(response.body.recommendations)).toBe(true);
  });
});
