import * as React from "react";

import {storiesOf} from "@storybook/react";

import {action} from "@storybook/addon-actions";

import Status from "../Status";
import DriverProfile from "./../../DriverProfile/DriverProfile";
import LevelBadge from "./../../LevelBadge/LevelBadge";
import PercentageCircleComponent from "./../../PercentageCircleComponent/PercentageCircleComponent";

import * as portraitImage from "../../../../resources/images/portrait.jpg"

storiesOf("Status", module)
  .add("Status positive", () => (
    <Status statusText="Du hast alles im Griff." status="ok" />
  ))
  .add("Status warning", () => (
    <Status statusText="Warnungstext." status="warning" />
  ))
  .add("Status negative", () => (
    <Status statusText="Du hast nicht alles im Griff." status="error" />
  ))
  .add("Status positive with image", () => (
    <Status statusText="Du hast alles im Griff." status="ok">
      <DriverProfile position="right" imgSrc={portraitImage} />
    </Status>
  ))
  .add("Status warning with image", () => (
    <Status statusText="Warnungstext." status="warning">
      <DriverProfile position="right" imgSrc={portraitImage} />
    </Status>
  ))
  .add("Status negative with image", () => (
    <Status statusText="Du hast nicht alles im Griff." status="error">
      <PercentageCircleComponent imgSrc={portraitImage} radius={60} borderWidth={4} percent={30} color={"#2ecc71"} position="right"/>
    </Status>
  ))
  .add("Status negative with Gamification Badge", () => (
    <Status statusText="Du hast nicht alles im Griff." status="error">
      <PercentageCircleComponent imgSrc={portraitImage} radius={60} borderWidth={4} percent={30} color={"#2ecc71"} position="right"/>
    </Status>
  ));;
