import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem } from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="yellow" textColor="black">
    <Notes>
      <p>Those are advices to programmers who want to join the design side.</p>
      <p>They can help you but they will not replace a good tutor.</p>
      <p>Find one in your company. Exchange code skills for UI skills?</p>
    </Notes>
    <Heading size={2} textColor="blue" caps>
      UI tips
    </Heading>
    <List>
      <ListItem>Get inspiration</ListItem>
      <ListItem>Do 3 simple versions</ListItem>
      <ListItem>Challenge with others, pick one, iterate</ListItem>
      <ListItem>Doing UI requires a lof of exploration. Try try try.</ListItem>
      <ListItem>Assign meaning to your colors and fonts</ListItem>
      <ListItem>Be consistent</ListItem>
    </List>
  </Slide>
);
