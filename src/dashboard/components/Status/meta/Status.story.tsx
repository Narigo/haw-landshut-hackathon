import * as React from "react";

import {storiesOf} from "@storybook/react";

import {action} from "@storybook/addon-actions";

import Status from "../Status";
import DriverProfile from "./../../DriverProfile/DriverProfile";
import App from "./../../../container/App/App";

import * as portraitImage from "../../../../resources/images/portrait.jpg"

storiesOf("Status", App)
  .add("Status positive", () => (
    <Status statusText="Du hast alles im Griff." positive />
  ))
  .add("Status negative", () => (
    <Status statusText="Du hast nicht alles im Griff." />
  ))
  .add("Status positive with image", () => (
    <Status statusText="Du hast alles im Griff." positive>
      <DriverProfile position="right" imgSrc={portraitImage} />
    </Status>
  ))
  .add("Status negative with image", () => (
    <Status statusText="Du hast nicht alles im Griff." >
      <DriverProfile position="right" imgSrc={portraitImage} />
    </Status>
  ));
