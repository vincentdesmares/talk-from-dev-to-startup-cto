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
      LEARN TO MAKE (GOOD) SPECIFICATIONS
    </Heading>
    <Text margin="10px 0 0" textColor="secondary" size={0.5}>
      <List>
        <ListItem>Keep the product simple and seek feedback</ListItem>
        <ListItem>Define the persona/users</ListItem>
        <ListItem>Define the use/cases</ListItem>
        <ListItem>Write a doc and remove everything you can.</ListItem>
      </List>
    </Text>
    <Text>
      "perfection is attained not when there is nothing more to add, but when
      there is nothing more to remove" Antoine de Saint-exupery
    </Text>
  </Slide>
);
