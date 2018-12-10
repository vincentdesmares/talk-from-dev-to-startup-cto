import React from "react";
import { Heading, Slide, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="yellow"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Hard to justify yourself "Why me?".</p>
      <p>insane amount of energy to go out of your confort zone</p>
      <p>incorpore it to my ways of doing things</p>
      <p>can be painting, writing, sport, music…</p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      Find your “touch”
    </Heading>
    <List>
      <ListItem>Competition is numerous</ListItem>
      <ListItem>There is always better than you at X</ListItem>
      <ListItem>But few are strongly driven</ListItem>
      <ListItem>Your "thing" will keep you going</ListItem>
    </List>
  </Slide>
);
