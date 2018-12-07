import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="cinquo" textColor="secondary">
    <Heading size={2} textColor="quartenary" caps>
      UI tips
    </Heading>
    <List>
      <ListItem>STEAL (or get "inspiration"...)</ListItem>
      <ListItem>Do 3 simple versions</ListItem>
      <ListItem>Challenge, pick one, iterate</ListItem>
      <ListItem>Doing UI requires a lof of exploration. Try try try.</ListItem>
      <ListItem>Do not design a system first</ListItem>
      <ListItem>Assign meaning to your colors and fonts</ListItem>
      <ListItem>You are either consistent or Picaso</ListItem>
    </List>
  </Slide>
);
