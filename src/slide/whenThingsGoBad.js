import React from 'react'
import { Heading, Slide, Text, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Heading size={6} textColor="pink" caps fit>
      WHEN THINGS GO BAD
    </Heading>
    <Heading size={6} textColor="BLACK" caps fit>
      IT's PROBABLY a COMMUNICATION issue
    </Heading>
    <Text bold textColor="blue">
      You may have failed to:
    </Text>
    <List>
      <ListItem>communicate an issue soon enough?</ListItem>
      <ListItem>appropriately communicate the risks upfront?</ListItem>
      <ListItem>
        understand their real problem and instead were driven by assumptions?
      </ListItem>
    </List>
    <Text bold>The sooner you Work on it, the better.</Text>
  </Slide>
)
