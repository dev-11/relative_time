import { Future } from "../../src/future/future.js";

describe("Future", () => {
    it("type is future", () => {
        var f = new Future();
        expect(f.get_type()).toBe("future");
    });
});