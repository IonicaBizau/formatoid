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
});

/**
 * formatDate
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
 *
 * @name formatDate
 * @function
 * @param {Date} i The date object.
 * @param {String} f The date format.
 * @return {String} The formatted date (as string).
 */
module.exports = function formatDate(i, f) {
    return parser.run(f, [i]);
};
