import * as React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
 
export default class Slider extends React.Component<any, {}> {
  public render(): React.ReactElement<any> {
    const {} = this.props;
    return (
      <section>
        <AwesomeSlider animation="cubeAnimation">
          <div data-src="https://caferati.me/images/series/south-park-1.jpg"></div>
          <div data-src="https://caferati.me/images/series/south-park-4.jpg"></div>
        </AwesomeSlider>
      </section>
    );
  }
}
