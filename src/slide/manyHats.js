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
      <h4>Slide notes</h4>
      <p>test</p>
      <ol>
        <li>First note</li>
        <li>Second note</li>
      </ol>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="black">
      ONE TITLE, MANY JOBS
    </Heading>
    <Text textColor="pink" style={{ marginTop: 30 }}>
      CODING, INFRASTRUCTURE MAINTENANCE, UI, UX, SPECIFICATIONS, TRANSLATIONS,
      SOCIAL NETWORK MANAGEMENT, BILLING, PROJECT MANAGEMENT, HIRING,
      COMPETITIVE INTELLIGENCE, MARKET RESEARCH, SALES
    </Text>
    <Text textColor="blue" style={{ marginTop: 30 }}>
      That's a lot of hat
    </Text>
    <Text
      textSize={10}
      textColor="grey"
      style={{ position: "fixed", left: -100, bottom: 0 }}
    >
      Art by deviantart.com/darklitria
    </Text>
    <img
      alt="Many hats on a head"
      src="/assets/images/hats.png"
      style={{ position: "fixed", height: "100%", right: -200, top: 0 }}
    />
  </Slide>
);
