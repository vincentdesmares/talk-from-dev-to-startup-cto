import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="primary"
    textColor="secondary"
    progressColor="secondary"
    controlColor="secondary"
  >
    <Heading size={6} textColor="tertiary" caps>
      UX tips
    </Heading>
    <List>
      <ListItem>Know your users (and personas)</ListItem>
      <ListItem>Work one use case at a time</ListItem>
      <ListItem>Am I doing something without use case? => DROP</ListItem>
      <ListItem>Sync the business terms with Tech</ListItem>
    </List>
  </Slide>
);
