"use strict";

const months = require("months")
    , days = require("days")
    , fillo = require("fillo")
    , ParseIt = require("parse-it").Parser
    ;

const parser = new ParseIt({
    // Years
    /// 2015
    "YYYY": function (i) { return i.getFullYear(); }

    // 15
  , "YY": function (i) { return i.getFullYear() % 100; }

    // Months
    // January
  , "MMMM": function (i) { return months[i.getMonth()]; }

    // Jan
  , "MMM": function (i) { return months.abbr[i.getMonth()]; }

    // 01
  , "MM": function (i) { return fillo(i.getMonth() + 1); }

    // 1
  , "M": function (i) { return i.getMonth() + 1; }

    // Days
    // Sunday
  , "dddd": function (i) { return days[i.getDay()]; }
    // Sun
  , "ddd": function (i) { return days.abbr[i.getDay()]; }
    // Su
  , "dd": function (i) { return days.short[i.getDay()]; }
    // 0
  , "d": function (i) { return i.getDay(); }

    // Dates
    // 06  Day in month
  , "DD": function (i) { return fillo(i.getDate()); }
    // 6   Day in month
  , "D": function (i) { return i.getDate(); }

    // AM/PM
    // AM/PM
  , "A": function (i) { return i.getHours() >= 12 ? "PM" : "AM"; }
    // am/pm
  , "a": function (i) { return i.getHours() >= 12 ? "pm" : "am"; }

    // Hours
    // 08 Hour
  , "hh": function (i) { return fillo(i.getHours() % 12 || 12); }
    // 8 Hour
  , "h": function (i) { return i.getHours() % 12 || 12; }
    // (alias)
  , "HH": function (i) { return fillo(i.getHours()); }
    // (alias)
  , "H": function (i) { return i.getHours(); }

    // Minutes
    // 09 Minute
  , "mm": function (i) { return fillo(i.getMinutes()); }
    // 9  Minute
  , "m": function (i) { return i.getMinutes(); }

    // Seconds
    // 09 Seconds
  , "ss": function (i) { return fillo(i.getSeconds()); }

    // 9  Seconds
  , "s": function (i) { return i.getSeconds(); }

    // Fractional seconds
    // 0 1 ... 8 9
  , "S": function (i) { return Math.round((i.getSeconds() / 60) * 10); }
  , "SS": function (i) { return fillo(Math.round((i.getSeconds() / 60) * 100)); }
  , "SSS": function (i) { return fillo(Math.round((i.getSeconds() / 60) * 1000), 3); }

    // Timezones
  , "Z": function (i) {
        const offset= -i.getTimezoneOffset();
        return (offset >= 0 ? "+" : "-") + fillo(parseInt(offset / 60)) + ":" + fillo(offset % 60);
    }
  , "ZZ": function (i) {
        const offset= -i.getTimezoneOffset();
        return (offset >= 0 ? "+" : "-") + fillo(parseInt(offset / 60)) + fillo(offset % 60);
    }
});

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
module.exports = function formatoid (i, f) {
    return parser.run(f, [i]);
};
