import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Heading size={6} textColor="pink" caps>
      WHEN THINGS GO BAD
    </Heading>
    <Text>Mostly a communication, or a lack of communication issue</Text>
    <List>
      <ListItem>Did you fail to communicate an issue soon enough?</ListItem>
      <ListItem>
        Did you fail to appropriately communicate the risks upfront?
      </ListItem>
      <ListItem>
        Did you fail to appropriately communicate the risks upfront?
      </ListItem>
      <ListItem>
        Did you fail to understand their real problem and instead were driven by
        assumptions?
      </ListItem>
    </List>
    <Text>The sooner you Work on it, the better.</Text>
  </Slide>
);
