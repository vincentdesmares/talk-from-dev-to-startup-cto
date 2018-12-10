import React from "react";
import { Heading, Slide, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes />
    <Heading size={6} textColor="pink" caps fit>
      Am I ready?
    </Heading>
    <List>
      <ListItem>Experience coding</ListItem>
      <ListItem>Experience leading coders</ListItem>
      <ListItem>Experience product design</ListItem>
      <ListItem>Go beyond what's asked</ListItem>
    </List>
  </Slide>
);
