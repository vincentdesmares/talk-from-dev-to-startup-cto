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
      LEARN TO WRITE SPECIFICATIONS
    </Heading>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Ask yourself:</ListItem>
        <ListItem>Who is this for? (persona/users)</ListItem>
        <ListItem>What is this for? (use cases)</ListItem>
        <ListItem>Remove everything you can.</ListItem>
        <ListItem>Postpone everything you can.</ListItem>
        <ListItem>Seek feedback</ListItem>
      </List>
    </Text>
    <Text textSize={25} italic>
      "perfection is attained not when there is nothing more to add, but when
      there is nothing more to remove" <b>Antoine de Saint-exupery ✈️</b>
    </Text>
  </Slide>
);
