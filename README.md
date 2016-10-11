
# formatoid

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/formatoid.svg)](https://www.npmjs.com/package/formatoid) [![Downloads](https://img.shields.io/npm/dt/formatoid.svg)](https://www.npmjs.com/package/formatoid) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Tiny and fast module for formatting date objects.

## :cloud: Installation

```sh
$ npm i --save formatoid
```


## :clipboard: Example



```js
const formatoid = require("formatoid");

var d = new Date(1989, 11, 21);

console.log(formatoid(d, "MM/DD/YYYY, h:mm"));
// => 12/20/1989, 12:00

console.log(formatoid(d, "MMMM D, YYYY"));
// => December 20, 1989

console.log(formatoid(d, "dddd, MMMM, D, YYYY h:m A"));
// => Wednesday, December, 20, 1989 12:0 AM
```

## :memo: Documentation


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

#### Params
- **Date** `i`: The date object.
- **String** `f`: The date format.

#### Return
- **String** The formatted date (as string).



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`daty`](https://github.com/IonicaBizau/daty#readme)—A tiny library to manage date objects.
 - [`github-calendar`](https://github.com/IonicaBizau/github-calendar#readme)—Embed your GitHub contributions calendar anywhere.

## :sparkles: Related

 - [`add-subtract-date`](https://github.com/IonicaBizau/add-subtract-date#readme)—Add or subtract a specified time in a date object.



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
