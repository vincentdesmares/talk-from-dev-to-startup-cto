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
      <p>many "hats" to bear will quickly get exhausting.</p>
      <p>hit a wall sooner or later</p>
      <p>Your worst enemy is the impostor syndrom.</p>
      <p>
        You will say to yourself: "Why am I here?", "I don't know what's I'm
        doing!". So, It might be true…..but most of the time it's just that you
        are completly in the wild, out of your confort zone for too much time.
        In this conditions, what helped me was to talk about it, or exchange on
        technologies I use. When you see that 90% of people you talk with are
        just starting the grab things you master, you will get the extra energy
        you need to go to the next mile. Go to meetups, read twitter, medium,
        etc…
      </p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      I did not know that.
    </Heading>
    <List>
      <ListItem>Impostor syndrome.</ListItem>
      <ListItem>Get Mentorship</ListItem>
      <ListItem>Talk to friends</ListItem>
      <ListItem>Go to meetups</ListItem>
      <ListItem>Follow tech influencers</ListItem>
      <ListItem>Just me wasn't enough</ListItem>
    </List>
  </Slide>
);
