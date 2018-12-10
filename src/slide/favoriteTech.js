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
      <p>The glue for the services.</p>
      <p>Good references</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="white">
      My favorite TECH picks
    </Heading>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>
          <b>NODE</b> + Gen. <b>GRAPHQL</b> = productivity
        </ListItem>
        <ListItem>
          <b>React - Redux - Tachyons</b>
        </ListItem>
        <ListItem>
          Components + Func. CSS ={" "}
          <span role="img" aria-label="heart">
            💖
          </span>
        </ListItem>
        <ListItem>
          <b>SQLite</b>: no other dep. than node.js
        </ListItem>
        <ListItem>
          <b>PM2</b> smart monitoring
        </ListItem>
      </List>
    </Text>
  </Slide>
);
