import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
  <Slide
    transition={["zoom"]}
    bgColor="pink"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>lead dev answers to feature possible or not.</p>
      <p> Now it's your duty to advice to do it entirely.</p>
      <p>
        Too many times I just did as "instructed" -> came back to a feature ->
        clueless about the "why" -> remove?
      </p>
      <p>You are the voice of the technology in your organization.</p>
      <p> Others will not make sound decisions without you.</p>
      <p>
        And you should not let them decide without they heard what you said
        (yet, they may not listen)
      </p>
      <p>
        Pareto principle: 80% of each feature can be done with 20% of the global
        effort.
      </p>
      <p> Provide the best feature/cost ratio for everything.</p>
      <p>
        Your CEO will have a product speech. Prepare your infrastructure one
      </p>
      <p>ex insights</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="white">
      Going from “can” to “should”
    </Heading>
    <Text textColor="black" fit>
      HAVE A VOICE, BUT ...
    </Text>
    <Text textColor="white">Be an ally, not a door guard.</Text>
    <Text textColor="white">Inspire, suggest, extend, educate.</Text>
    <Text textColor="white">
      You must weight Business and Technology equaly.
    </Text>
    <Text textColor="white">Find the 80/20 -> Provide options</Text>
  </Slide>
);
