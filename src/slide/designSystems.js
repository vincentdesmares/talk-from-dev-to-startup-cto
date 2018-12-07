import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="cinquo"
    progressColor="secondary"
    controlColor="secondary"
  >
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Design system?
    </Heading>
    <Text margin="10px 0 0" textColor="secondary">
      A design system is a series of components that can be reused in different
      combinations. Design systems allow you to manage design at scale
    </Text>
    <Text margin="50px 0 0" textColor="quartenary" fit bold>
      https://forumone.com/ideas/what-is-design-system
    </Text>
  </Slide>
);
