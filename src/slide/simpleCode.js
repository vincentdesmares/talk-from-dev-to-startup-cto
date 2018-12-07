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
      KEEP THE CODE SIMPLE
    </Heading>
    <Text margin="10px 0 0" textColor="secondary" size={0.5}>
      <List>
        <ListItem>Things change fast</ListItem>
        <ListItem>Easy to modify/compose</ListItem>
        <ListItem>Platform selection and technical design</ListItem>
        <ListItem>Seeing the big picture</ListItem>
      </List>
    </Text>
  </Slide>
);
