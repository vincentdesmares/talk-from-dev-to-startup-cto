import React from 'react'
import { Heading, Slide, Text, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['slide']}
    bgColor="blue"
    progressColor="black"
    controlColor="black"
  >
    <Heading size={3} textColor="white" caps fit>
      Learning Design
    </Heading>
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        width: '20%',
        right: 100,
        bottom: 60
      }}
      src="assets/images/design.svg"
    />
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        width: '15%',
        left: '5%',
        bottom: '5%'
      }}
      src="assets/images/wireframe.svg"
    />
    <Text bold fit textColor="pink">
      Will give you a huge advantage
    </Text>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Design ~= programming</ListItem>
        <ListItem>Design Systems & tools like Figma</ListItem>
        <ListItem>At least learn to do wireframes</ListItem>
        <ListItem>I can give another talk about that :)</ListItem>
      </List>
    </Text>
  </Slide>
)
