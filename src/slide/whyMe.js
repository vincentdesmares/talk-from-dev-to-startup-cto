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
      <p>test</p>
      <ol>
        <li>First note</li>
        <li>Second note</li>
      </ol>
    </Notes>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Why me?
    </Heading>
    <Text>
      BECAUSE YOU'RE MOST LIKELY THE ONE WITH THE BEST VIEW OF WHAT THE PRODUCT
      IS IN REALITY.
    </Text>
    <Text>
      BECAUSE YOU CAN MAKE SURE THAT BOTH THE TECH AND THE PRODUCT SPECS SHARE
      THE SAME TERMS.
    </Text>
  </Slide>
);
