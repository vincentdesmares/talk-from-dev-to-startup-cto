import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Heading size={6} textColor="pink" caps fit>
      DEMO TIME
    </Heading>
    <Text size={6} textColor="blue" margin="20px 0" bold>
      Let's make a simple form
    </Text>
  </Slide>
);
