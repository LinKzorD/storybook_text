import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "../components/Text";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = ({ ...args }) => (
  <Text {...args}>hello world lorem cona olaadsasdaw safafsas</Text>
);
export const Capitalize: ComponentStory<typeof Text> = ({ ...args }) => (
  <Text capitalize {...args}>
    hello world lorem cona olaadsasdaw safafsas
  </Text>
);
export const Truncate: ComponentStory<typeof Text> = ({ ...args }) => (
  <Text truncate len={4} {...args}>
    hello world lorem cona olaadsasdaw safafsas
  </Text>
);
