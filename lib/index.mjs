"use strict";

const months = require("months"), days = require("days"), fillo = require("fillo"),
    ParseIt = require("parse-it").Parser;

const rules = {
    // Years
    /// 2015
    YYYY(i, utc) {
        if (utc) {
            return i.getUTCFullYear();
        }
        return i.getFullYear();
    },

    // 15
    YY(i, utc) {
        return rules.YYYY(i, utc) % 100;
    },

    // Months
    // January
    MMMM(i, utc) {
        if (utc) {
            return months[i.getUTCMonth()];
        }
        return months[i.getMonth()];
    },

    // Jan
    MMM(i, utc) {
        if (utc) {
            return months.abbr[i.getUTCMonth()];
        }
        return months.abbr[i.getMonth()];
    },

    // 01
    MM(i, utc) {
        if (utc) {
            return fillo(i.getUTCMonth() + 1);
        }
        return fillo(i.getMonth() + 1);
    },

    // 1
    M(i, utc) {
        if (utc) {
            return i.getUTCMonth() + 1;
        }
        return i.getMonth() + 1;
    },

    // Days
    // Sunday
    dddd(i, utc) {
        return days[rules.d(i, utc)];
    },

    // Sun
    ddd(i, utc) {
        return days.abbr[rules.d(i, utc)];
    },

    // Su
    dd(i, utc) {
        return days.short[rules.d(i, utc)];
    },

    // 0
    d(i, utc) {
        if (utc) {
            return i.getUTCDay();
        }
        return i.getDay();
    },

    // Dates
    // 06  Day in month
    DD(i, utc) {
        return fillo(rules.D(i, utc));
    },

    // 6   Day in month
    D(i, utc) {
        if (utc) {
            return i.getUTCDate();
        }
        return i.getDate();
    },

    // AM/PM
    // AM/PM
    A(i, utc) {
        return rules.a(i, utc).toUpperCase();
    },

    // am/pm
    a(i, utc) {
        return rules.H(i, utc) >= 12 ? "pm" : "am";
    },

    // Hours
    // 08 Hour
    hh(i, utc) {
        return fillo(rules.h(i, utc));
    },

    // 8 Hour
    h(i, utc) {
        return rules.H(i, utc) % 12 || 12;
    },

    // (alias)
    HH(i, utc) {
        return fillo(rules.H(i, utc));
    },

    // (alias)
    H(i, utc) {
        if (utc) {
            return i.getUTCHours();
        }
        return i.getHours();
    },

    // Minutes
    // 09 Minute
    mm(i, utc) {
        return fillo(rules.m(i, utc));
    },

    // 9  Minute
    m(i, utc) {
        if (utc) {
            return i.getUTCMinutes();
        }
        return i.getMinutes();
    },

    // Seconds
    // 09 Seconds
    ss(i, utc) {
        return fillo(rules.s(i, utc));
    },

    // 9  Seconds
    s(i, utc) {
        if (utc) {
            return i.getUTCSeconds();
        }
        return i.getSeconds();
    },

    // Fractional seconds
    // 0 1 ... 8 9
    S(i, utc) {
        return Math.round(rules.s(i, utc) / 60 * 10);
    },

    SS(i, utc) {
        return fillo(rules.s(i, utc) / 60 * 100);
    },

    SSS(i, utc) {
        return fillo(rules.s(i, utc) / 60 * 1000, 3);
    },

    // Timezones
    Z(i) {
        const offset = -i.getTimezoneOffset();
        return (offset >= 0 ? "+" : "-") + fillo(parseInt(offset / 60)) + ":" + fillo(offset % 60);
    },

    ZZ(i) {
        const offset = -i.getTimezoneOffset();
        return (offset >= 0 ? "+" : "-") + fillo(parseInt(offset / 60)) + fillo(offset % 60);
    }
}

const parser = new ParseIt(rules);

/**
 * formatoid
 * Formats the date into a given format.
 *
 * Usable format fields:
 *
 *  - **Years**
 *      - `YYYY` (e.g. `"2015"`)
 *      - `YY` (e.g. `"15"`)
 *  - **Months**
 *      - `MMMM` (e.g. `"January"`)
 *      - `MMM` (e.g. `"Jan"`)
 *      - `MM` (e.g. `"01"`)
 *      - `M` (e.g. `"1"`)
 *  - **Days**
 *      - `dddd` (e.g. `"Sunday"`)
 *      - `ddd` (e.g. `"Sun"`)
 *      - `dd` (e.g. `"Su"`)
 *      - `d` (e.g. `"Su"`)
 *  - **Dates**
 *      - `DD` (e.g. `"07"`)
 *      - `D` (e.g. `"7"`)
 *  - **AM/PM**
 *      - `A` (e.g. `"AM"`)
 *      - `a` (e.g. `"pm"`)
 *  - **Hours**
 *      - `hh` (e.g. `"07"`)–12 hour format
 *      - `h` (e.g. `"7"`)
 *      - `HH` (e.g. `"07"`)–24 hour format
 *      - `H` (e.g. `"7"`)
 *  - **Minutes**
 *      - `mm` (e.g. `"07"`)
 *      - `m` (e.g. `"7"`)
 *  - **Seconds**
 *      - `ss` (e.g. `"07"`)
 *      - `s` (e.g. `"7"`)
 *  - **Fractional seconds**
 *      - `S` (e.g. `0 1 2 3 ... 9`)
 *      - `SS` (e.g. `00 01 02 ... 98 99`)
 *      - `SS` (e.g. `000 001 002 ... 998 999`)
 *  - **Timezones**
 *      - `Z` (e.g. `-07:00 -06:00 ... +06:00 +07:00`)
 *      - `ZZ` (e.g. `-0700 -0600 ... +0600 +0700`)
 *
 * @name formatoid
 * @function
 * @param {Date} i The date object.
 * @param {String} f The date format.
 * @return {String} The formatted date (as string).
 */
export default function formatoid(i, f) {
    return parser.run(f, [i, i._useUTC]);
};
