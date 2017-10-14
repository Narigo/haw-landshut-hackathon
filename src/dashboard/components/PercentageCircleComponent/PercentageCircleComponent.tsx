import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as circleStyles from "./PercentageCircleComponent.pcss";
import LevelBadge from "./../LevelBadge/LevelBadge"

interface Props extends PresentationComponentProps {
  imgSrc: string;
  position?: string;
  percent: number;
  color: string;
  innerColor?: string;
  borderWidth: number;
  radius: number;
  bgcolor?: string;
  textStyle?: string;
}

export default class PercentageCircleComponent extends PresentationComponent<Props, {}> {
    public render() {
      const {percent} = this.props;
      let leftTransformerDegree = '0deg';
      let rightTransformerDegree = '0deg';
      if (percent >= 50) {
        rightTransformerDegree = '180deg';
        leftTransformerDegree = (percent - 50) * 3.6 + 'deg';
      } else {
        rightTransformerDegree = percent * 3.6 + 'deg';
        leftTransformerDegree = '0deg';
      }
      this.state = {
        percent: this.props.percent,
        borderWidth: this.props.borderWidth < 2 || !this.props.borderWidth ? 2 : this.props.borderWidth,
        leftTransformerDegree,
        rightTransformerDegree,
      };

      return (
        <div>
      <div
        className={circleStyles.circle}
        style={{
          [this.props.position] : 10,
          width: this.props.radius * 2,
          height: this.props.radius * 2,
          borderRadius: this.props.radius,
          backgroundColor: this.props.bgcolor,
        }}
      >
        <div
          className={circleStyles.leftWrap}
          style={{
            width: this.props.radius,
            height: this.props.radius * 2,
            left: 0,
          }}
        >
          <div
            className={circleStyles.loader}
            id="id1"
            style={{
              left: this.props.radius,
              width: this.props.radius,
              height: this.props.radius * 2,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: this.props.color,
              transform: 'rotate(' + leftTransformerDegree + ')',
            }}
          />
        </div>
        <div
          className={circleStyles.rightWrap}
          style={{
            width: this.props.radius,
            height: this.props.radius * 2,
            left: this.props.radius,
          }}
        >
          <div
            className={circleStyles.loader2}
            id="id2"
            style={{
              left: -this.props.radius,
              width: this.props.radius,
              height: this.props.radius * 2,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: this.props.color,
              transform: 'rotate(' + rightTransformerDegree + ')',
            }}
          />
        </div>
        <div
          className={circleStyles.innerCircle}
          style={{
            left: this.props.borderWidth,
            top: this.props.borderWidth,
            width: (this.props.radius - this.props.borderWidth) * 2,
            height: (this.props.radius - this.props.borderWidth) * 2,
            borderRadius: this.props.radius - this.props.borderWidth,
            backgroundColor: this.props.innerColor,
          }}
        >
        <div className={circleStyles.circularWrapper}>
          <img src={this.props.imgSrc} alt="Driver Profile" />
        </div>
       </div>
      </div>
      <LevelBadge radius={60} borderWidth={4} level={5} color={"#2ecc71"} />
        </div>
        )
  }
}