import React from 'react'
import { Heading, Slide, Text, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['slide']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        height: '20%',
        right: '10%',
        top: '45%'
      }}
      src="assets/images/notes.svg"
    />
    <Heading size={2} caps lineHeight={1} textColor="pink">
      LEARN TO WRITE SPECIFICATIONS
    </Heading>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Who is this for? (persona/users)</ListItem>
        <ListItem>What is this for? (use cases)</ListItem>
        <ListItem>Remove everything you can</ListItem>
        <ListItem>Postpone everything you can</ListItem>
        <ListItem>Seek feedback</ListItem>
      </List>
    </Text>
    <Text textSize={25} italic>
      AGAIN: "perfection is attained not when there is nothing more to add, but
      when there is nothing more to remove."{' '}
      <b>
        Antoine de Saint-exupery{' '}
        <span role="img" aria-label="plane">
          ✈️
        </span>
      </b>
    </Text>
  </Slide>
)
