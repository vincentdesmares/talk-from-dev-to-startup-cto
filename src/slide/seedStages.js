import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>I can only talk about what I experienced</p>
      <p>Serie </p>
      <p>Each funding serie has different requirements for a CTO</p>
      <p>Link: But what's the job?</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="pink">
      STARTUP CTO
    </Heading>
    <Text textColor="black" fit>
      For pre-seed/seed stages
    </Text>
    <List>
      <ListItem>It's more than a technical lead</ListItem>
      <ListItem>Different Role for each serie A/B/C/D/E</ListItem>
    </List>
    <Text textColor="blue" style={{ marginTop: 50 }} />
    <Text textColor="blue"> </Text>
  </Slide>
);
