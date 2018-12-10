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
      <p>Link: Simple, mastered and ... clean!</p>
    </Notes>
    <Heading caps lineHeight={1} textColor="white" fit>
      USE TECH YOU KNOW
    </Heading>
    <Text textColor="black" bold style={{ marginTop: 50 }}>
      Be tech-pragmatic.
    </Text>
    <Text textColor="white" style={{ marginTop: 50 }}>
      With a touch of explorations!
    </Text>
  </Slide>
);
