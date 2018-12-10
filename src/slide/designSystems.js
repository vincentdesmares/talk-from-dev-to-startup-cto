import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Heading size={1} fit caps lineHeight={1} textColor="pink">
      Design system?
    </Heading>
    <Text margin="10px 0 0" textColor="black">
      A design system is a series of components that can be reused in different
      combinations. Design systems allow you to manage design at scale
    </Text>
    <Text margin="50px 0 0" textColor="blue" fit bold>
      https://forumone.com/ideas/what-is-design-system
    </Text>
  </Slide>
);
