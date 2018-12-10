import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>
        Matters: product studio (+100 produits) / startup studio (Teamstarter)
      </p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="black">
      I'm Vincent
    </Heading>
    <Text textColor="pink" fit>
      Working @ matters for 8 years!
    </Text>
    <Text textColor="blue">CTO @ Teamstarter for 1 year.</Text>
  </Slide>
);
