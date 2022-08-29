import React from "react";
import {render, screen} from "@testing-library/react";

const BSDays = require("../bs-days").default;

describe("Days View Component", () => {
  it("should be rendered successful with default props", () => {
    render(<BSDays dataTestId="days" />);
    const element = screen.getByTestId("days");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("TABLE");
    const [thead] = element.getElementsByTagName("thead");
    expect(thead).toBeInTheDocument();
    const days = thead.getElementsByTagName("th");
    expect(days).toHaveLength(7);
    expect(days[0].textContent).toBe("Su");
    expect(days[1].textContent).toBe("Mo");
    expect(days[2].textContent).toBe("Tu");
    expect(days[3].textContent).toBe("We");
    expect(days[4].textContent).toBe("Th");
    expect(days[5].textContent).toBe("Fr");
    expect(days[6].textContent).toBe("Sa");
    const [tbody] = element.getElementsByTagName("tbody");
    expect(tbody).toBeInTheDocument();
    const weeks = tbody.getElementsByTagName("tr");
    expect(weeks).toHaveLength(6);
    Array.from(weeks).forEach((week) => {
      const days = week.getElementsByTagName("td");
      expect(days).toHaveLength(7);
    });
  });
  it("should render correct days for specified month", () => {
    render(<BSDays dataTestId="days" month="3" year="2022" />);
    const element = screen.getByTestId("days");
    const [tbody] = element.getElementsByTagName("tbody");
    const days = tbody.getElementsByTagName("td");
    expect(days[0].textContent).toBe("27");
    expect(days[5].textContent).toBe("1");
  });
  it("should highlight today", () => {
    render(<BSDays dataTestId="days" selectedDate="2022-01-01" />);
    const today = new Date();
    const todayCell = screen.getByTitle(today.toDateString());
    expect(todayCell.classList.contains("bg-light")).toBeTruthy();
  });
  it("should hightlight selectedDate", () => {
    render(
      <BSDays
        dataTestId="days"
        month="0"
        selectedDate="2022-01-01"
        year="2022"
      />,
    );
    const element = screen.getByTestId("days");
    const [tbody] = element.getElementsByTagName("tbody");
    const days = tbody.getElementsByTagName("td");
    expect(days[6].classList.contains("bg-primary")).toBeTruthy();
  });
  it("should hightlight date by click", () => {
    render(<BSDays dataTestId="days" year="2022" month="0" selectedDate="2022-1-1" />);
    const element = screen.getByTestId("days");
    const [tbody] = element.getElementsByTagName("tbody");
  });
});
