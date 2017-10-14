import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as levelBadgeStyles from "./LevelBadge.pcss";

interface Props extends PresentationComponentProps {
  imgSrc: string;
  position?: string;
  percent: number;
  color: string;
  innerColor?: string;
  borderWidth: number;
  radius: number;
  bgcolor?: string;
  level: number;
  textStyle?: string;
}

export default class LevelBadge extends PresentationComponent<Props, {}> {
  public render() {
    return (
      <div className={levelBadgeStyles.badge}>
       <p>{this.props.level}</p>
    </div>
    )
  } 
}