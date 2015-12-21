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

module.exports = function formatDate(i, f) {
    return parser.run(f, [i]);
};
