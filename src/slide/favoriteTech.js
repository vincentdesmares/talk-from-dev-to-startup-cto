import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    bgColor="pink"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>to be the most productive and agile possible</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="white">
      My favorite TECH picks
    </Heading>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>NODE + Gen. GRAPHQL = productivity</ListItem>
        <ListItem>React - Redux - Tachyons</ListItem>
        <ListItem>Components + Func. CSS = 💖</ListItem>
        <ListItem>SQLite : no other dep. than node.js</ListItem>
        <ListItem>PM2 smart monitoring</ListItem>
      </List>
    </Text>
  </Slide>
);
