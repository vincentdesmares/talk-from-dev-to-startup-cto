import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="cinquo"
    progressColor="secondary"
    controlColor="secondary"
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
    <Heading size={1} caps lineHeight={1} fit textColor="secondary">
      UX/UI
    </Heading>
  </Slide>
);
