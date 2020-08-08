import { YearsAgo } from "../../src/past/years_ago_formatter.js";


describe("Years ago tests", () => {
    it("Years ago in range true", () => {
        let years_ago = new YearsAgo(new Date("05-01-2022"), new Date("01-01-2020"));
        expect(years_ago.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new YearsAgo(new Date("05-01-2022"), new Date("01-01-2020"));
        expect(instance.get_range_name()).toBe("2 years ago");
    });
});
