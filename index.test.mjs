import request from "supertest";
import app from "./index.mjs";

describe("lotto betting api", () => {
    describe("GET /current", () => {
        it("should return current lotto betting", async () => {
            const res = await request(app).get("/current");
            expect(res.statusCode).toEqual(200);
            expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
            expect(res.body).toHaveProperty("close_at");
        });
    });

    describe("POST /bet", () => {
        it("should return 201 when bet is valid", async () => {
            const res = await request(app).post("/bet").send({
                numbers: [1, 2, 3, 4, 5, 6]
            });
            expect(res.statusCode).toEqual(201);
            expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
            expect(res.body).toHaveProperty("id");
        });

        it("should return 400 when bet is invalid", async () => {
            const res = await request(app).post("/bet").send({
                numbers: [1, 2, 3, 4, 5]
            });
            expect(res.statusCode).toEqual(400);
            expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
            expect(res.body).toHaveProperty("error");
        });
    });
});