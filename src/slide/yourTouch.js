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
      Find your “touch”
    </Heading>
    <List>
      <ListItem>Competition is numerous</ListItem>
      <ListItem>There is always better than you at X</ListItem>
      <ListItem>But few are strongly driven</ListItem>
      <ListItem>Find what would get you out of the trenches</ListItem>
    </List>
  </Slide>
);
