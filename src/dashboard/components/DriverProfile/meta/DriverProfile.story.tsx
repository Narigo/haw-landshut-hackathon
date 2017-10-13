import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import DriverProfile from "./../DriverProfile";
import App from "./../../../container/App/App";
import * as portraitImage from "./../../../../../ressources/images/portrait.jpg"

storiesOf("DriverProfile", App)
  .add("with image", () => (
    <DriverProfile imgSrc={portraitImage}/>
  ));
