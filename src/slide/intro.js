import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>I'm happy to be there to share my experience</p>
      <p>4 parts</p>
      <ol>
        <li>Me & the product</li>
        <li>on the Tech</li>
        <li>on the design</li>
        <li>the Soft skills</li>
      </ol>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="black">
      FROM DEV TO STARTUP CTO
    </Heading>
    <div style={{ height: 50 }}> </div>
    <Text textColor="pink" fit bold>
      Surviving the earliest days
    </Text>
    <div style={{ height: 50 }}> </div>
    <Text textColor="blue">from my work on Teamstarter</Text>
    <img
      src="/assets/images/logo-cut.svg"
      style={{
        position: "fixed",
        top: -100,
        right: -100,
        width: "50%",
        zIndex: "-1",
        opacity: "0.2"
      }}
    />
  </Slide>
);
