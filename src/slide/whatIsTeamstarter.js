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
      What's teamstarter?
    </Heading>
    <Text textColor="secondary" fit>
      It's like kickstarter in your organization
    </Text>
    <Text textColor="quartenary">Your budget, your project, your culture.</Text>
  </Slide>
);
