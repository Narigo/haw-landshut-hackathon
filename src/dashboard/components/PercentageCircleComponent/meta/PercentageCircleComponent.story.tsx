import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import PercentageCircleComponent from "./../PercentageCircleComponent";

import * as portraitImage from "./../../../../resources/images/portrait.jpg";

storiesOf("PercentageCircleComponent", module).add("without image", 
() => <PercentageCircleComponent imgSrc={portraitImage} radius={60} borderWidth={4} percent={30} color={"#2ecc71"} />)
