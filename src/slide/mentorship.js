import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>many "hats" to bear will quickly get exhausting.</p>
      <p>hit a wall sooner or later</p>
      <p>Your worst enemy is the impostor syndrom.</p>
      <p>"Why am I here?", "I don't know what's I'm doing!"</p>
      <p>Even more true for bootcamps</p>
      <p>
        What helped me : talk about technologies I use. 90% of people are just
        starting the grab things you master
      </p>
    </Notes>
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        height: '25%',
        right: '5%',
        bottom: '5%'
      }}
      src="assets/images/sad.svg"
    />
    <Heading size={6} textColor="pink" caps fit>
      I did not know that
    </Heading>
    <List>
      <ListItem>Impostor syndrome</ListItem>
      <ListItem>Just "me" wasn't enough</ListItem>
      <ListItem>Get Mentorship (ex: codingcoach.io) </ListItem>
      <ListItem>Talk to friends</ListItem>
      <ListItem>Go to meetups or join clubs (ex: City-o)</ListItem>
      <ListItem>Follow tech influencers</ListItem>
    </List>
  </Slide>
)
