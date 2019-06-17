import React from "react";
import { storiesOf } from "@storybook/react";
import Navbar from "../components/Navbar";
storiesOf("Navbar", module).add("Brown/CCV", function () {
  return React.createElement(Navbar, null);
});