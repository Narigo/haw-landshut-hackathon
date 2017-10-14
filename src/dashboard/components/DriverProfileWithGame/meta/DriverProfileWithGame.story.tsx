import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import DriverProfile from "./../DriverProfileWithGame";

import * as portraitImage from "./../../../../resources/images/portrait.jpg";

storiesOf("DriverProfileWithGame", module).add("with image", () => <DriverProfile imgSrc={portraitImage} />);
