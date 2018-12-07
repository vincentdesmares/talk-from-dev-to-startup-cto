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
      Going from “can” to “should”
    </Heading>
    <Text textColor="secondary" fit>
      HAVE A VOICE, BUT ...
    </Text>
    <Text textColor="quartenary">Be an ally, not a door guard.</Text>
    <Text textColor="quartenary">Inspire, suggest, extend, educate.</Text>
    <Text textColor="quartenary">
      You must weight Business and Technology equaly.
    </Text>
    <Text textColor="quartenary">Find the 80/20 -> Provide options</Text>
  </Slide>
);
