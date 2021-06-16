const request = require("supertest");
const app = require("../src/app");

describe("books", () => {
  test("Getting books works", async () => {
    const response = await request(app.callback()).get("/books");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(100);
  });
});
