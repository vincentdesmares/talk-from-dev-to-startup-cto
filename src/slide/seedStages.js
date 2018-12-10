import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>I can only talk about what I experienced</p>
      <p>Each funding serie has different requirements for a CTO</p>
      <p>Link: But what's the job?</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="pink">
      STARTUP CTO
    </Heading>
    <Text textColor="black" fit>
      For pre-seed/seed stages
    </Text>
    <Text textColor="blue" style={{ marginTop: 50 }}>
      More than a technical lead
    </Text>
    <Text textColor="blue">!= Role for each serie A/B/C/D/E </Text>
  </Slide>
);
