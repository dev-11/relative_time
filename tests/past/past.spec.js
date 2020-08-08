import { Past } from "../../src/past/past.js";

describe("Past", () => {
    it("type is past", () => {
        var p = new Past();
        expect(p.get_type()).toBe("past");
    });
});