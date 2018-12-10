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
      <h4>Slide notes</h4>
      <p>3 parts</p>
      <ol>
        <li>Tech</li>
        <li>product</li>
        <li>UI/UX</li>
      </ol>
    </Notes>
    <Heading size={1} caps lineHeight={1} fit textColor="black">
      PRODUCT
    </Heading>
  </Slide>
);
