const {addDays, subtractDays, getFirstDay, getMonthCalendarDays} = require("../date.utils");

describe("Date utils", () => {
  it('should return correct days array for Jan 1970', () => {
    const daysArray = getMonthCalendarDays(0, 1970)
    expect(daysArray[0].getDate()).toBe(28);
    expect(daysArray[4].getDate()).toBe(1);
    expect(daysArray).toHaveLength(42);
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

  describe("getFirstDay", () => {
    it("should return first day of month", () => {
      const firstDay = getFirstDay(0, 1970);
      expect(firstDay.getDate()).toBe(1);
      expect(firstDay.getMonth()).toBe(0);
      expect(firstDay.getFullYear()).toBe(1970);
    });
  });


  describe("addMonth", () => {
    it("it should get same day of next month", () => {});
  });
});
