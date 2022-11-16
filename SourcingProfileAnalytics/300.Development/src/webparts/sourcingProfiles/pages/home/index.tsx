import * as React from "react";
import Slider from "./Slider";
import FeaturedList from "./FeaturedList";
import { Link } from "react-router-dom";
import "./styles.module.scss";

export default class HomePage extends React.Component<any, {}> {
  public render(): React.ReactElement<any> {
    const {} = this.props;

    return (
      <section className="homepage">
        {/* <Link to="/example">Example Link</Link> */}
        <Slider />
        <FeaturedList />
      </section>
    );
  }
}
