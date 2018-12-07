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
      USE SERVICES
    </Heading>
    <Text margin="10px 0 0" textColor="secondary" size={0.5}>
      <List>
        <ListItem>Auth0 -> Authentication</ListItem>
        <ListItem>AWS -> flexible infrastructure</ListItem>
        <ListItem>Cloudinary -> Media Cdn 💖</ListItem>
        <ListItem>Sentry -> Bug report</ListItem>
        <ListItem>Intercom -> User support</ListItem>
      </List>
    </Text>
  </Slide>
);
