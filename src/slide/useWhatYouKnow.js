import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="pink"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>big difference between being a lead dev and a CTO</p>
      <p>-> weight the outcome for the company.</p>
      <p>
        It's very important to not lose yourself in the new shiny technology.
      </p>
      <p>Use the tool you know and love.</p>
      <p>To stay productive and on schedule</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="white">
      USE TECH YOU KNOW
    </Heading>
    <Text textColor="black" fit bold>
      Be tech-pragmatic
    </Text>
    <Text textColor="white" style={{ marginTop: 50 }}>
      With a touch of explorations
    </Text>
  </Slide>
);
