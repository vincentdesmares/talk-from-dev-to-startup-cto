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
    <Notes>
      It's very difficult to justify yourself "Why me?". It takes an insane
      amount of energy to go out of your confort zone every day. You will sooner
      or later get exausted. The only way I found to go ahead was to use what I
      like and incorpore it to my ways of doing things. For me it's my video
      game programmer classes that influance me on how to animate and make
      things move and interact. For you it can be painting, writing, sport,
      music, anything…
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      Find your “touch”
    </Heading>
    <List>
      <ListItem>Competition is numerous</ListItem>
      <ListItem>There is always better than you at X</ListItem>
      <ListItem>But few are strongly driven</ListItem>
      <ListItem>Find what would get you out of the trenches</ListItem>
    </List>
  </Slide>
);
