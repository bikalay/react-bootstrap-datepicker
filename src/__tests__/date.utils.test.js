const {
  addDays,
  subtractDays,
  getMonthCalendarDays,
  parseDate,
  sameDay,
} = require("../date.utils");

describe("Date utils", () => {
  describe("getMonthCalendarDays", () => {
    it("should return correct days array for Jan 1970", () => {
      const daysArray = getMonthCalendarDays(0, 1970);
      expect(daysArray[0].getDate()).toBe(28);
      expect(daysArray[4].getDate()).toBe(1);
      expect(daysArray).toHaveLength(42);
    });
  });

  describe("dateAdd", () => {
    it("should get next date", () => {
      const date = new Date(1970, 11, 20);
      const resultDate1 = addDays(date, 1);
      expect(resultDate1.getDate()).toBe(21);
      expect(resultDate1.getMonth()).toBe(11);
      expect(resultDate1.getFullYear()).toBe(1970);
      const resultDate2 = addDays(date, 15);
      expect(resultDate2.getDate()).toBe(4);
      expect(resultDate2.getMonth()).toBe(0);
      expect(resultDate2.getFullYear()).toBe(1971);
    });
  });

  describe("subtractDays", () => {
    it("should get previous date", () => {
      const date = new Date(1970, 0, 10);
      const resultDate1 = subtractDays(date, 1);
      expect(resultDate1.getDate()).toBe(9);
      expect(resultDate1.getMonth()).toBe(0);
      expect(resultDate1.getFullYear()).toBe(1970);
      const resultDate2 = subtractDays(date, 15);
      expect(resultDate2.getDate()).toBe(26);
      expect(resultDate2.getMonth()).toBe(11);
      expect(resultDate2.getFullYear()).toBe(1969);
    });
  });

  describe("parseDate", () => {
    it("should throw error if invalid date passed", () => {
      expect(() => {
        parseDate(new Date("Invalid date"));
      }).toThrowError("Invalid date");
    });
    it("should throw error if passed value than can't be a date", () => {
      expect(() => {
        parseDate("bad date string");
      }).toThrowError("Invalid date");
    });
    it("should return same date if passed correct date object", () => {
      const date = new Date();
      expect(parseDate(date) === date).toBeTruthy();
    });
    it("shoud return correct date object for correct input number", () => {
      const date1 = parseDate(0);
      expect(date1.getFullYear()).toBe(1970);
      const date2 = parseDate(new Date().getTime());
      expect(date2.getFullYear()).toBe(new Date().getFullYear());
    });
  });

  describe("sameDay", () => {
    it("should return true for same days", () => {
      expect(sameDay(new Date("1970-1-1"), new Date(1970, 0, 1))).toBeTruthy();
      expect(sameDay('1970-1-1', new Date(0).getTime()));
    });
    it("should return false for different days", () => {
      expect(sameDay(new Date(), new Date(0))).toBeFalsy();
    })
  });
});
