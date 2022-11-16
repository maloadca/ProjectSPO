import * as React from "react";
import {
  DefaultPalette,
  Stack,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
} from "@fluentui/react";
import styles from "./header.module.scss";
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
  },
};
const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "center",
    background: DefaultPalette.purple,
    color: DefaultPalette.white,
    display: "flex",
    height: 30,
    justifyContent: "center"
  },
};

const stackLogoItemStyles: IStackItemStyles = {
  root: {
    alignItems: "left",
    background: DefaultPalette.white,
    color: DefaultPalette.white,
    display: "flex",    
    justifyContent: "center"
  },
};

// Tokens definition
const stackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10
};

const Header: React.FunctionComponent = () => {
  return (
    <Stack horizontal styles={stackStyles} tokens={stackTokens}>
        {/* <Stack.Item grow={4} styles={stackLogoItemStyles}>
        <img src={require("../../assets/logo.png")} alt="logo_img" />        
      </Stack.Item>       */}
      <Stack.Item grow styles={stackItemStyles}>
        TRANG CHU1
      </Stack.Item>
      <Stack.Item grow={2} styles={stackItemStyles}>
        NHA THAU TVTK
      </Stack.Item>
      <Stack.Item grow={2} styles={stackItemStyles}>
        NHA THAU CUNG UNG
      </Stack.Item>
      <Stack.Item grow={2} styles={stackItemStyles}>
        NHA THAU THI CONG
      </Stack.Item>
    </Stack>
  );
};
export default Header;
