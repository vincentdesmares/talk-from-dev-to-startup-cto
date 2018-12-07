import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    bgColor="primary"
    progressColor="secondary"
    controlColor="secondary"
  >
    <Notes>
      <h4>Slide notes</h4>
      <p>test</p>
      <ol>
        <li>First note</li>
        <li>Second note</li>
      </ol>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="secondary">
      I'm Vincent
    </Heading>
    <Text textColor="tertiary" fit>
      Working @ matters for 8 years!
    </Text>
    <Text textColor="quartenary">CTO @ Teamstarter for 1 year.</Text>
  </Slide>
);
