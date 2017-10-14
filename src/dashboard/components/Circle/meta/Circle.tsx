import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Circle from "./../Circle";

import * as portraitImage from "./../../../../resources/images/portrait.jpg";

storiesOf("Circle", module).add("with image", () => <Circle imgSrc={portraitImage} percentage={15} />);
