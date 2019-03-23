import React from 'react'
import { Heading, Slide, Text, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['slide']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Heading size={3} textColor="black" caps fit>
      Design & Programming
    </Heading>
    <Text bold fit textColor="pink">
      in 2018
    </Text>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Iterate fast</ListItem>
        <ListItem>Do not repeat yourself</ListItem>
        <ListItem>Trends are passing fast</ListItem>
        <ListItem>You need to have skills in both</ListItem>
        <ListItem>Teams change fast</ListItem>
      </List>
    </Text>
  </Slide>
)
