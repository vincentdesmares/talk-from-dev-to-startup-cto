import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="tertiary"
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
    <Heading size={1} caps lineHeight={1} textColor="primary">
      STARTUP CTO
    </Heading>
    <Text textColor="secondary" fit>
      For pre-seed/seed stages
    </Text>
    <Text textColor="quartenary">More than a technical lead</Text>
    <Text textColor="quartenary">!= Role for each serie A/B/C/D/E </Text>
  </Slide>
);
