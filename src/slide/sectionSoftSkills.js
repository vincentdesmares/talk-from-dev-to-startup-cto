import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Last but important part</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} fit textColor="black">
      SOFT SKILLS
    </Heading>
  </Slide>
);
