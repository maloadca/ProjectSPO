import {
  DefaultPalette,
  INavStyles,
  IStackItemStyles,
  Stack,
  StackItem,
} from "office-ui-fabric-react";
import * as React from "react";
  import styles from "./appHomeLayout.module.scss";
 
import Header from "./header/header";

export default class AppHomeLayout extends React.Component<any> {
  render() {
    return (
      <div className={`ms-Grid ${styles.appHomeLayout}`}>
        <div className={`ms-Grid-row ${styles.header}`}>
          <Header />
        </div>
        <div className="ms-Grid-row">{this.props.children}</div>
        {/* <div className={`ms-Grid-row ${styles.footer}`}>
          <Footer />
        </div> */}
      </div>
    );
  }
}
