import React from "react";
import { storiesOf } from "@storybook/react";
import Spinner from "../components/Spinner";
storiesOf("Spinner", module).add("Spinner", function () {
  return React.createElement(Spinner, null);
});