import * as React from "react";
import styles from "./SourcingProfiles.module.scss";
import { ISourcingProfilesProps } from "./ISourcingProfilesProps";
import { escape } from "@microsoft/sp-lodash-subset";
import AppHomeLayout from "../layouts/AppHomeLayout";
import HomePage from "../pages/home";
import {
  DefaultPalette,
  INavStyles,
  IStackItemStyles,
  Stack,
  StackItem,
} from "office-ui-fabric-react";
import { Route, Routes, HashRouter } from "react-router-dom";
import SpfxReactImagefullscreen from "../pages/home/slider/testslider";

export default class SourcingProfiles extends React.Component<
  ISourcingProfilesProps,
  {}
> {
  public render(): React.ReactElement<ISourcingProfilesProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
      context,
    } = this.props;
    debugger;
    return (
     
      <section
        className={`${styles.sourcingProfiles} ${
          hasTeamsContext ? styles.teams : ""
        }`}
      >
        <SpfxReactImagefullscreen
          description={this.props.description}
          context={this.props.context}
        />
        <AppHomeLayout>
          <HashRouter>
            <Stack horizontal gap={15}>
              <StackItem grow={2}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/example" element={<div>Example page</div>} />
                </Routes>
              </StackItem>
            </Stack>
          </HashRouter>
        </AppHomeLayout>
      </section>
    );
  }
}
