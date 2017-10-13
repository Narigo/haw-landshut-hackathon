import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import DriverProfile from "./../DriverProfile";

import * as portraitImage from "./../../../../resources/images/portrait.jpg";

storiesOf("DriverProfile", module).add("with image", () => <DriverProfile imgSrc={portraitImage} />);
