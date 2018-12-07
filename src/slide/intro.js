import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
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
      FROM DEV TO STARTUP CTO
    </Heading>
    <div style={{ height: 50 }}> </div>
    <Text textColor="tertiary" fit>
      Surviving the earliest days
    </Text>
    <div style={{ height: 50 }}> </div>
    <Text textColor="quartenary">from my work on Teamstarter</Text>
  </Slide>
);
