# date-formatter [![Support this project][donate-now]][paypal-donations]

Lazy-replace date fields in a string.

## Installation

```sh
$ npm i --save date-formatter
```

## Example

```js
const formatDate = require("date-formatter");

var d = new Date(1989, 11, 21);

console.log(formatDate(d, "MM/DD/YYYY, h:mm"));
// => 12/20/1989, 12:00

console.log(formatDate(d, "MMMM D, YYYY"));
// => December 20, 1989

console.log(formatDate(d, "dddd, MMMM, D, YYYY h:m A"));
// => Wednesday, December, 20, 1989 12:0 AM
```

## Documentation

### `formatDate(i, f)`
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

#### Params
- **Date** `i`: The date object.
- **String** `f`: The date format.

#### Return
- **String** The formatted date (as string).

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`youzan-api`](https://npmjs.com/package/youzan-api) by Leo

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md