import React from "react";
import { canvasStyle } from "./Canvas.style";
import { Frame, Element } from "@craftjs/core";
import { Root } from "../../user/Root/Root";

export const Canvas = () => {
  return (
    <div style={canvasStyle}>
      <Frame>
        <Element is={Root} id="root" canvas style={{ height: "100%" }} />
      </Frame>
    </div>
  );
};
