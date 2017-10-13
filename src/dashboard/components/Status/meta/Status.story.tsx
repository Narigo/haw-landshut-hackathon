import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Status from "../Status";

storiesOf("Status", module)
  .add("Short text", () => <Status>Short text.</Status>)
  .add("Long text", () => (
    <Status>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam
    </Status>
  ));
