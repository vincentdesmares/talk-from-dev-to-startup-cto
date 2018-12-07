import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
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
      Put in place good practices
    </Heading>
    <Text margin="10px 0 0" textColor="secondary" size={0.5}>
      <List>
        <ListItem>Testing</ListItem>
        <ListItem>CI</ListItem>
        <ListItem>Comments</ListItem>
        <ListItem>Will be harder later.</ListItem>
      </List>
    </Text>
  </Slide>
);
