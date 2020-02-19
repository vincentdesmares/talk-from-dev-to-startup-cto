import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="yellow"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Hard to justify yourself "Why me?".</p>
      <p>insane amount of energy to go out of your confort zone</p>
      <p>incorpore it to my ways of doing things</p>
      <p>can be painting, writing, sport, music…</p>
    </Notes>
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        height: '30%',
        right: '5%',
        bottom: '5%'
      }}
      src="assets/images/art.svg"
    />
    <Heading size={6} textColor="pink" caps fit>
      CTO VS FOUNDER
    </Heading>
    <List>
      <ListItem>Founder status is a lot more work</ListItem>
      <ListItem>Starting a startup: money is tight</ListItem>
      <ListItem>long vs short term investment</ListItem>
      <ListItem>Very hard to stay focus</ListItem>
      <ListItem>Be ready to go out of your confort zone</ListItem>
    </List>
  </Slide>
)
