import React from "react";
import { useNode } from "@craftjs/core";
import { Flex, Input } from "antd";
import { SettingsTitle } from "../../reusables/SettingsTitle/SettingsTitle";
import { CustomSlider } from "../../reusables/CustomSlider/CustomSlider";

export const LayoutTwoOneSettings = () => {
  const {
    actions: { setProp },
    backgroundColor,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft
  } = useNode((node) => ({
    backgroundColor: node.data.props.backgroundColor,
    paddingTop: node.data.props.paddingTop,
    paddingBottom: node.data.props.paddingBottom,
    paddingRight: node.data.props.paddingRight,
    paddingLeft: node.data.props.paddingLeft,
  }));
  return (
    <Flex vertical gap={20} align="flex-start">
      <Flex vertical gap={10} align="flex-start" style={{ width: "100%" }}>
        <SettingsTitle>Color</SettingsTitle>
        <Input
          value={backgroundColor}
          onChange={(e) => {
            setProp((props) => (props.backgroundColor = e.target.value), 1000);
          }}
        />
      </Flex>
      <Flex vertical gap={10} align="flex-start" style={{ width: "100%" }}>
        <SettingsTitle>Padding</SettingsTitle>
        <CustomSlider label='Top' value={paddingTop} setValue={(val) => setProp((props) => (props.paddingTop = val), 1000)}/>
        <CustomSlider label='Right' value={paddingRight} setValue={(val) => setProp((props) => (props.paddingRight = val), 1000)}/>
        <CustomSlider label='Bottom' value={paddingBottom} setValue={(val) => setProp((props) => (props.paddingBottom = val), 1000)}/>
        <CustomSlider label='Left' value={paddingLeft} setValue={(val) => setProp((props) => (props.paddingLeft = val), 1000)}/>
      </Flex>
    </Flex>
  );
};
