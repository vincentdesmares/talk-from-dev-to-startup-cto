import React from "react";
import { Heading, Slide, Text, List, ListItem } from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={1} textColor="primary" caps>
      Why Figma?
    </Heading>
    <Text margin="10px 0 0" textColor="secondary" size={0.5}>
      <List>
        <ListItem>+ Components</ListItem>
        <ListItem>+ Live collaboration</ListItem>
        <ListItem>+ Live demo/share</ListItem>
        <ListItem>+ Available on any (decent) browser</ListItem>
        <ListItem>- Can be slow to load</ListItem>
        <ListItem>- Lack of polish</ListItem>
      </List>
    </Text>
  </Slide>
);
