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
      ONE TITLE, MANY JOBS
    </Heading>
    <Text textColor="tertiary">
      CODING, INFRASTRUCTURE MAINTENANCE, UI, UX, SPECIFICATIONS, TRANSLATIONS,
      SOCIAL NETWORK MANAGEMENT, BILLING, PROJECT MANAGEMENT, HIRING,
      COMPETITIVE INTELLIGENCE, MARKET RESEARCH, SALES
    </Text>
    <Text textColor="quartenary">That's a lot of hat</Text>
  </Slide>
);
