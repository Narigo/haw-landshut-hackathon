import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as circleStyles from "./Circle.pcss";

interface Props extends PresentationComponentProps {
  imgSrc: string;
  position?: string;
  percentage: number;
}

export default class Circle extends PresentationComponent<Props, {}> {
  public render() {
    const { imgSrc, position, percentage } = this.props;
    const angle = 3.6;

    const circleTransformationStyle = {
      transform: `rotate(${angle*percentage}deg)`,
      margin: '20px',
      background : '#eee',
      padding: '20px'
    };


    return (
      <div className={circleStyles.fullCircle}>
          <div style={circleTransformationStyle} className={circleStyles.slice}>
            
            <span>26%</span>
            <div className={circleStyles.bar}/>
            <div className={circleStyles.fill}/>
            </div>
            <p>.big</p>

        <img src={imgSrc} alt="Driver Profile" />
       
  </div>
    );
  }
}
