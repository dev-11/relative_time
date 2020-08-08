import { NextWeek } from "../../src/future/next_week_formatter.js";


describe("NextWeek tests", () => {

    it("test for next week false", () => {
        let next_week = new NextWeek(new Date("05-05-2020"), new Date("05-10-2020"));
        expect(next_week.in_range()).toBeFalsy();
    });

    it("test for next week (Monday)", () => {
        let next_week = new NextWeek(new Date("05-04-2020"), new Date("05-11-2020"));
        expect(next_week.in_range()).toBeTruthy();
    });

    it("test for next week (middle of week)", () => {
        let next_week = new NextWeek(new Date("05-04-2020"), new Date("05-09-2020"));
        expect(next_week.in_range()).toBeFalsy();
    });

    it("test for next week (Sunday)", () => {
        let next_week = new NextWeek(new Date("05-05-2020"), new Date("05-17-2020"));
        expect(next_week.in_range()).toBeTruthy();
    });

    it("test for next week false 2", () => {
        let next_week = new NextWeek(new Date("05-05-2020"), new Date("05-18-2020"));
        expect(next_week.in_range()).toBeFalsy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new NextWeek(new Date(), new Date());
        expect(instance.get_range_name()).toBe("next week");
    });
});
