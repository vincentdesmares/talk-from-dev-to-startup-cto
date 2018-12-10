import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <h4>Slide notes</h4>
      <p>test</p>
      <ol>
        <li>First note</li>
        <li>Second note</li>
      </ol>
    </Notes>
    <Heading size={2} caps lineHeight={1} textColor="pink">
      Is there an use case for that?
    </Heading>
    <Text>No?</Text>
    <Text fit bold>
      DROP
    </Text>
  </Slide>
);
