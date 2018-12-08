import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    bgColor="primary"
    progressColor="secondary"
    controlColor="secondary"
  >
    <Notes>
      <h4>Slide notes</h4>
      <p>SAAS models are now aimed at making startup succeed.</p>
      <p>Check the pricing.</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="secondary">
      Do not lose touch with how things works
    </Heading>
    <Text margin="10px 0 0" textColor="secondary" size={0.5}>
      <List>
        <ListItem>Magic code is deadly</ListItem>
        <ListItem>You are the only reference</ListItem>
        <ListItem>Be able to answer anything</ListItem>
        <ListItem>Or lose confidence of everyone</ListItem>
      </List>
    </Text>
  </Slide>
);
