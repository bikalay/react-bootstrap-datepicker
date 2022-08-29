import React from "react";
import BSDays from "../bs-days";

export default {
  title: "Example/BSDays",
  component: BSDays,
};

const TemplateDefault = () => {
  return <BSDays />;
};

const TemplateWithSelectedDate = () => {
  return <BSDays month="0" year="2022" selectedDate="2022-1-1" />
}

export const Default = TemplateDefault.bind({});
export const SelectedDate = TemplateWithSelectedDate.bind({});
