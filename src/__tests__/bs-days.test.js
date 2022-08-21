import React from "react";
import {render} from "@testing-library/react";

const BSDays = require("../bs-days").default;

describe("Days View Component", () => {
  it("should be rendered sucessful", () => {
    render(<BSDays />)
  });
});
