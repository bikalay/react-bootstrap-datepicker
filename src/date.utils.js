const weekDays = 7;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const weeksInMonth = 6;

/**
 * getMonthCalendarDays
 *
 * @param {number} month
 * @param {number} year
 * @returns {Array<Date>}
 */
export const getMonthCalendarDays = (month, year) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const result = [];
  let date = subtractDays(firstDayOfMonth, firstDayOfMonth.getDay());
  for (let i  = 0; i < weekDays * weeksInMonth; i++) {
    result.push(date);
    date = addDays(date, 1);
  }
  return result;
};

/**
 * addDays.
 *
 * @param {Date} date
 * @param {number} number
 * @returns {Date}
 */
export const addDays = (date, number) => {
  const timestamp = new Date(date).getTime();
  return parseDate(timestamp + (day * number));
};


/**
 * subtractDays.
 *
 * @param {Date} date
 * @param {number} number
 * @returns {Date}
 */
export const subtractDays = (date, number) => {
  const timestamp = new Date(date).getTime();
  return parseDate(timestamp - (day * number))
}

/**
 * isDate.
 *
 * @param {*} value
 * return {Date}
 */
export const parseDate = (value) => {
  if(Object.prototype.toString.call(value) === "[object Date]") {
    if(isNaN(value.getTime())) {
      throw new Error("Invalid date");
    }
    return value;
  }
  const date = new Date(value);
  if(isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }
  return date;
}

/**
 * sameDay.
 *
 * @param {number | string | Date} date1
 * @param {number | string | Date} date2
 */
export const sameDay = (date1, date2) => {
  const _date1 = parseDate(date1);
  const _date2 = parseDate(date2);
  return _date1.toDateString() === _date2.toDateString();
}


