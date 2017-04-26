## Documentation

You can see below the API reference of this module.

### `formatoid(i, f)`
Formats the date into a given format.

Usable format fields:

 - **Years**
     - `YYYY` (e.g. `"2015"`)
     - `YY` (e.g. `"15"`)
 - **Months**
     - `MMMM` (e.g. `"January"`)
     - `MMM` (e.g. `"Jan"`)
     - `MM` (e.g. `"01"`)
     - `M` (e.g. `"1"`)
 - **Days**
     - `dddd` (e.g. `"Sunday"`)
     - `ddd` (e.g. `"Sun"`)
     - `dd` (e.g. `"Su"`)
     - `d` (e.g. `"Su"`)
 - **Dates**
     - `DD` (e.g. `"07"`)
     - `D` (e.g. `"7"`)
 - **AM/PM**
     - `A` (e.g. `"AM"`)
     - `a` (e.g. `"pm"`)
 - **Hours**
     - `hh` (e.g. `"07"`)–12 hour format
     - `h` (e.g. `"7"`)
     - `HH` (e.g. `"07"`)–24 hour format
     - `H` (e.g. `"7"`)
 - **Minutes**
     - `mm` (e.g. `"07"`)
     - `m` (e.g. `"7"`)
 - **Seconds**
     - `ss` (e.g. `"07"`)
     - `s` (e.g. `"7"`)
 - **Fractional seconds**
     - `S` (e.g. `0 1 2 3 ... 9`)
     - `SS` (e.g. `00 01 02 ... 98 99`)
     - `SS` (e.g. `000 001 002 ... 998 999`)
 - **Timezones**
     - `Z` (e.g. `-07:00 -06:00 ... +06:00 +07:00`)
     - `ZZ` (e.g. `-0700 -0600 ... +0600 +0700`)

#### Params
- **Date** `i`: The date object.
- **String** `f`: The date format.

#### Return
- **String** The formatted date (as string).

