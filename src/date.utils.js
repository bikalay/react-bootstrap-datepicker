const weekDays = 7;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const weeksInMonth = 6;

/**
 * getMountDays.
 *
 * @param {number} month
 * @param {number} year
 * @returns {Array<Date>}
 */
export const getMonthCalendarDays = (month, year) => {
  const firstDayOfMonth = getFirstDay(month, year);
  const result = [];
  let date = subtractDays(firstDayOfMonth, firstDayOfMonth.getDay());
  for (let i  = 0; i < weekDays * weeksInMonth; i++) {
    result.push(date);
    date = addDays(date, 1);
  }
  return result;
};



/**
 * getFirstDay.
 *
 * @param {number} month
 * @param {number} year
 * @returns {Date}
 */
export const getFirstDay = (month, year) => {
  return new Date(year, month, 1);
}


/**
 * addDays.
 *
 * @param {Date} date
 * @param {number} number
 * @returns {Date}
 */
export const addDays = (date, number) => {
  const timestamp = new Date(date).getTime();
  return new Date(timestamp + (day * number));
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
  return new Date(timestamp - (day * number))
}

