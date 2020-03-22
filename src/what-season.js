module.exports = function getSeason(date) {
  if (typeof date == "undefined") return 'Unable to determine the time of year!'
  if (typeof date.getUTCDate() != "number") throw new Error();
  if (date.getMonth() > 1 && date.getMonth() < 5) return 'spring'
  if (date.getMonth() > 4 && date.getMonth() < 8) return 'summer'
  if (date.getMonth() > 7 && date.getMonth() < 11) return 'fall'
  if (date.getMonth() == 0  || date.getMonth() == 1 || date.getMonth() ==  11) return 'winter'
};
