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
      I did not know that.
    </Heading>
    <List>
      <ListItem>Just me wasn’t enough.</ListItem>
      <ListItem>Get Mentorship</ListItem>
      <ListItem>Talk to friends</ListItem>
      <ListItem>Go to meetups</ListItem>
      <ListItem>Follow tech influencers</ListItem>
    </List>
  </Slide>
);
