import { PastMonths } from "../../src/past/past_months_formatter.js";


describe("PastMonth tests", () => {

    it("test for past month true", () => {
        let past_months = new PastMonths(new Date("05-01-2020"), new Date("02-29-2020"));
        expect(past_months.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new PastMonths(new Date("05-01-2020"), new Date("02-29-2020"));
        expect(instance.get_range_name()).toBe("February");
    });
});
