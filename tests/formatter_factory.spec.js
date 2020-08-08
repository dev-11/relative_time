import { get_formatters } from "../src/formatters_factory";

import { Today } from "../src/present/today_formatter";

import { Yesterday } from "../src/past/yesterday_formatter";
import { DayBeforeYesterday } from "../src/past/the_day_before_yesterday_formatter";
import { LastMonth } from "../src/past/last_month_formatter.js";
import { LastWeek } from "../src/past/last_week_formatter.js";
import { LastYear } from "../src/past/last_year_formatter.js";
import { PastMonths } from "../src/past/past_months_formatter.js";
import { ThisMonthPast } from "../src/past/this_month_past_formatter";
import { ThisWeekPast } from "../src/past/this_week_past_formatter.js";
import { ThreeWeeksAgo } from "../src/past/three_weeks_ago_formatter.js";
import { TwoWeeksAgo } from "../src/past/two_weeks_ago_formatter.js";
import { YearsAgo } from "../src/past/years_ago_formatter.js";

import { Tomorrow } from "../src/future/tomorrow_formatter";
import { DayAfterTomorrow } from "../src/future/the_day_after_tomorrow_formatter";
import { FutureMonth } from "../src/future/future_month_formatter.js";
import { NextMonth } from "../src/future/next_month_formatter.js";
import { NextWeek } from "../src/future/next_week_formatter.js";
import { NextYear } from "../src/future/next_year_formatter.js";
import { ThisMonthFuture } from "../src/future/this_month_future_formatter";
import { ThisWeekFuture } from "../src/future/this_week_future_formatter.js";
import { ThreeWeeksFromNow } from "../src/future/three_weeks_from_now_formatter";
import { TwoWeeksFromNow } from "../src/future/two_weeks_from_now_formatter";
import { YearsFromNow } from "../src/future/years_from_now_formatter.js";


describe("formatter factory tests", () => {

    // present

    it("one formatter for today", () => {
        let date = new Date("05-01-2020");
        let formatters = get_formatters(date, date);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(Today);
    });

    // past

    it("one formatter for yesterday", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("04-30-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(Yesterday);
    });

    it("one formatter for the day before yesterday", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("04-29-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(DayBeforeYesterday);
    });

    it("one formatter for the this week", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("04-28-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThisWeekPast);
    });

    it("one formatter for the last week", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("04-26-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(LastWeek);
    });

    it("one formatter for the two weeks ago", () => {
        let date_1 = new Date("05-31-2020");
        let date_2 = new Date("05-17-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(TwoWeeksAgo);
    });

    it("one formatter for the three weeks ago", () => {
        let date_1 = new Date("05-31-2020");
        let date_2 = new Date("05-10-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThreeWeeksAgo);
    });

    it("one formatter for this month", () => {
        let date_1 = new Date("05-31-2020");
        let date_2 = new Date("05-03-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThisMonthPast);
    });

    it("one formatter for last month", () => {
        let date_1 = new Date("05-31-2020");
        let date_2 = new Date("04-30-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(LastMonth);
    });

    it("one formatter for past months" , () => {
        let date_1 = new Date("07-30-2020");
        let date_2 = new Date("02-03-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(PastMonths);
    });

    it("one formatter for last year", () => {
        let date_1 = new Date("07-30-2020");
        let date_2 = new Date("12-31-2019");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(LastYear);
    });

    it("one formatter for years ago" , () => {
        let date_1 = new Date("07-30-2020");
        let date_2 = new Date("12-31-2018");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(YearsAgo);
    });

    // future 

    it("one formatter for tomorrow", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("05-02-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(Tomorrow);
    });

    it("one formatter for the day after tomorrow", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("05-03-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(DayAfterTomorrow);
    });
    
    it("one formatter for FutureMonth", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("07-03-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(FutureMonth);
    });

    it("one formatter for NextMonth", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("06-01-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(NextMonth);
    });

    it("one formatter for NextWeek", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("05-06-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(NextWeek);
    });

    it("one formatter for TwoWeeksFromNow", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("05-13-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(TwoWeeksFromNow);
    });

    it("one formatter for ThreeWeeksFromNow", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("05-20-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThreeWeeksFromNow);
    });

    it("one formatter for ThisWeekFuture", () => {
        let date_1 = new Date("05-04-2020");
        let date_2 = new Date("05-08-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThisWeekFuture);
    });

    it("one formatter for ThisMonthFuture", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("05-30-2020");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThisMonthFuture);
    });

    it("one formatter for NextYear", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("05-30-2021");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());

        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(NextYear);
    });

    it("one formatter for YearsFromNow", () => {
        let date_1 = new Date("05-01-2020");
        let date_2 = new Date("06-30-2022");
        let formatters = get_formatters(date_1, date_2);
        let formatter = formatters.filter((item) => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(YearsFromNow);
    });
});
