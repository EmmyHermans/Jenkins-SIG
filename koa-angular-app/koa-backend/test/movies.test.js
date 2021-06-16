const request = require("supertest");
const app = require("../src/app");

describe("movies", () => {
  test("Getting movies works", async () => {
    const response = await request(app.callback()).get("/movies");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(100);
  });
});
