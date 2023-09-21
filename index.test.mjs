import request from "supertest";
import app from "./index.mjs";

describe("lotto betting api", () => {
    describe("GET /round/current", () => {
        it("should return current round with close date", async () => {
            const res = await request(app).get("/round/current");
            expect(res.statusCode).toEqual(200);
            expect(res.headers["content-type"]).toEqual(expect.stringContaining("json"));
            expect(res.body).toHaveProperty("round");
            expect(res.body).toHaveProperty("closeDate");
        });
    });

    describe("POST /round/current/bet", () => {
        it("should return 201 when bet is valid", async () => {
            const res = await request(app)
                .post("/round/current/bet")
                .send({
                    numbers: [1, 2, 3, 4, 5, 6]
                });
            expect(res.statusCode).toEqual(201);
            expect(res.headers["content-type"]).toEqual(expect.stringContaining("json"));
            expect(res.body).toHaveProperty("id");
        });

        it("should return 400 when bet is invalid", async () => {
            const res = await request(app)
                .post("/round/current/bet")
                .send({
                    numbers: [1, 2, 3, 4, 5]
                });
            expect(res.statusCode).toEqual(400);
            expect(res.headers["content-type"]).toEqual(expect.stringContaining("json"));
            expect(res.body).toHaveProperty("error");
        });
    });
});