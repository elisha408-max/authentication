// 24. Write a JavaScript function to get the month name from a particular date.
var month_name = function (dt) {
    mlist = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return mlist[dt.getMonth()];
  };
  console.log(month_name(new Date("01/02/2022")));
  console.log(month_name(new Date("02/04/2022")));