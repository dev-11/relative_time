import { ThisWeekPast } from "../../src/past/this_week_past_formatter.js";


describe("ThisWeekPast tests", () => {
    it("in_range returns true for this week past 2+ days gap", () => {
        let this_week_past = new ThisWeekPast(new Date("05-10-2020"), new Date("05-05-2020"));
        expect(this_week_past.in_range()).toBeTruthy();
    });

    it("in_range returns true for this week past 2+ days gap, test 2", () => {
        let this_week_past = new ThisWeekPast(new Date("06-04-2020"), new Date("06-01-2020"));
        expect(this_week_past.in_range()).toBeTruthy();
    });

    it("in_range returns false for this week past 2+ days gap", () => {
        let this_week_past = new ThisWeekPast(new Date("05-05-2020"), new Date("05-11-2020"));
        expect(this_week_past.in_range()).toBeFalsy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new ThisWeekPast(new Date(), new Date());
        expect(instance.get_range_name()).toBe("this week");
    });
});
