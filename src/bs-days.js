import React from "react";
import {getMonthCalendarDays} from "./date.utils";

/**
 *  @typedef {Object} BSDaysProps
 *  @property {string=} dataTestId
 *  @property {number | string=} month
 *  @property {number | string=} year
 */

/**
 * BSDays.
 *
 * @param {BSDaysProps} props
 */
const BSDays = (props) => {
  const today = new Date();
  let {
    dataTestId,
    month = today.getMonth(),
    year = today.getFullYear(),
  } = props;
  month = typeof month === "string" ? parseInt(month, 10) : month;
  year = typeof year === "string" ? parseInt(year, 10) : year;

  const days = getMonthCalendarDays(month, year);
  /**
   * getDayClassName.
   *
   * @param {Date} date
   * @returns {string}
   */
  const getDayClassName = (date) => {
    const today = new Date();
    if(today.toDateString() === date.toDateString()) {
      return "bg-light"
    }
    return "";
  };

  return (
    <table
      className="table table-bordered text-center"
      data-testid={dataTestId}
    >
      <thead>
        <tr>
          <th>Su</th>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th>Sa</th>
        </tr>
      </thead>
      <tbody>
        {new Array(6).fill(1).map((ignored, index) => {
          return (
            <tr key={index}>
              {days.slice(index * 7, (index + 1) * 7).map((date) => {
                return (
                  <td
                    className={getDayClassName(date)}
                    title={date.toDateString()}
                    key={date.toDateString()}
                  >
                    {date.getDate()}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BSDays;
