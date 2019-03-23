import React from 'react'
import { Heading, Slide, Text, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="pink"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Lead Dev answers to feature possible or not.</p>
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
    <Heading size={1} caps lineHeight={1} textColor="white" fit>
      Going from “can”
    </Heading>
    <Text fit bold>
      to “should”
    </Text>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Weight Business and Tech equaly</ListItem>
        <ListItem>Be an ally, not a door guard</ListItem>
        <ListItem>Inspire, suggest, extend, educate</ListItem>
        <ListItem>Find the 80/20 -> Provide alternatives</ListItem>
      </List>
    </Text>
  </Slide>
)
