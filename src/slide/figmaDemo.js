import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Notes>Show you the components</Notes>
    <Heading size={6} textColor="pink" caps fit>
      DEMO TIME
    </Heading>
    <Text size={6} textColor="blue" margin="20px 0" bold>
      Let's make a simple form and discover component-based design.
    </Text>
  </Slide>
)
