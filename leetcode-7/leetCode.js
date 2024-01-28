// 1507. Reformat Date

// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].
// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.

// Example 1:

// Input: date = "20th Oct 2052"
// Output: "2052-10-20"
// Example 2:

// Input: date = "6th Jun 1933"
// Output: "1933-06-06"
// Example 3:

// Input: date = "26th May 1960"
// Output: "1960-05-26"

// variant-1:
var reformatDate = function (date) {
  let data = date;
  if (date.length === 12) {
    data = "0" + date;
  }

  let res = "";
  let year = data.slice(9, 13);
  let sana = data.slice(0, 2);
  let month = data.slice(5, 8);

  switch (month) {
    case "Jan":
      month = "01";
      break;
    case "Feb":
      month = "02";
      break;
    case "Mar":
      month = "03";
      break;
    case "Apr":
      month = "04";
      break;
    case "May":
      month = "05";
      break;
    case "Jun":
      month = "06";
      break;
    case "Jul":
      month = "07";
      break;
    case "Aug":
      month = "08";
      break;
    case "Sep":
      month = "09";
      break;
    case "Oct":
      month = "10";
      break;
    case "Nov":
      month = "11";
      break;
    case "Dec":
      month = "12";
      break;
  }

  res = `${year}-${month}-${sana}`;
  return res;
};

// variant-2: (optimal)
var reformatDate = function (date) {
  let m = new Map([
    ["Jan", "01"],
    ["Feb", "02"],
    ["Mar", "03"],
    ["Apr", "04"],
    ["May", "05"],
    ["Jun", "06"],
    ["Jul", "07"],
    ["Aug", "08"],
    ["Sep", "09"],
    ["Oct", "10"],
    ["Nov", "11"],
    ["Dec", "12"],
  ]);

  return date[1] >= 0 && date[1] <= 9
    ? date.substring(9, 13) +
        "-" +
        m.get(date.substring(5, 8)) +
        "-" +
        date.substring(0, 2)
    : date.substring(8, 12) +
        "-" +
        m.get(date.substring(4, 7)) +
        "-0" +
        date[0];
};
