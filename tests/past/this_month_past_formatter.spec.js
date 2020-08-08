import { ThisMonthPast } from "../../src/past/this_month_past_formatter";


describe("ThisMonthPast tests", () => {
    it("test for ThisMonthPast", () => {
        let this_month_past = new ThisMonthPast(new Date("05-31-2020"), new Date("05-01-2020"));
        expect(this_month_past.in_range()).toBeTruthy();
    });

    it("test for ThisMonthPast false", () => {
        let this_month_past = new ThisMonthPast(new Date("05-31-2020"), new Date("05-04-2020"));
        expect(this_month_past.in_range()).toBeFalsy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new ThisMonthPast(new Date(), new Date());
        expect(instance.get_range_name()).toBe("this month");
    });
});
