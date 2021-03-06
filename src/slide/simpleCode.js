import React from 'react'
import { Heading, Slide, Text, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['slide']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>
        Even for a simple product like our, we had to rework it multiple times.
      </p>
      <p>Bad technology choice could have kill us.</p>
      <p>
        We took time to refactor what needed to be, now we ship quickly and when
        needed.
      </p>
      <p>
        Link: Simple code is great, but it's not enough. You much master what
        you are using.
      </p>
    </Notes>
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        width: '20%',
        top: '40%',
        right: '10%'
      }}
      src="assets/images/prototype.svg"
    />
    <Heading size={1} caps lineHeight={1} textColor="pink">
      KEEP THE CODE SIMPLE
    </Heading>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Things change fast</ListItem>
        <ListItem>Easy to modify/compose</ListItem>
        <ListItem>Also true for architecture</ListItem>
        <ListItem>Seeing the big picture</ListItem>
        <ListItem>Permissive design</ListItem>
      </List>
    </Text>
    <Text textSize={25} style={{ width: '70%' }}>
      "Perfection is Achieved Not When There Is Nothing More to Add, But When
      There Is Nothing Left to Take Away" - Antoine de Saint-Exupery
    </Text>
  </Slide>
)
