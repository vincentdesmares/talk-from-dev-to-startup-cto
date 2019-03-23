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
      <p>One of my sin in programming is "reinvent the wheel".</p>
      <p>SAAS models are now aimed at making startup succeed.</p>
      <p>
        Be careful with the pricing, some services can be nice, other can be a
        burden : ex Analytics dashboards (ModeAnalytics)
      </p>
      <p>
        Link: In addition to the services we use, I gathered for you some of my
        favorite techs.
      </p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="pink">
      USE SaaS
    </Heading>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Auth0 -> Authentication</ListItem>
        <ListItem>AWS -> flexible infrastructure</ListItem>
        <ListItem>
          Cloudinary -> Media Cdn{' '}
          <span role="img" aria-label="heart">
            💖
          </span>
        </ListItem>
        <ListItem>Sentry -> Bug report</ListItem>
        <ListItem>Intercom -> User support</ListItem>
      </List>
    </Text>
    <Text bold>Your time is money! Weight time/price.</Text>
    <Text style={{ marginTop: 50 }}>Check the pricings!</Text>
  </Slide>
)
