import React from 'react'
import { Heading, Slide, Text, List, ListItem, Notes } from 'spectacle'

function Plus() {
  return <b style={{ color: 'lime' }}>+</b>
}

function Less() {
  return <b style={{ color: '#ca0000' }}>-</b>
}

export default (
  <Slide transition={['fade']} bgColor="pink">
    <Notes>We moved from Sketch to figma</Notes>
    <Heading size={1} textColor="white" caps fit>
      What's Figma?
    </Heading>
    <Text bold>It's like Sketch but collaborative and online.</Text>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>
          <Plus /> Components
        </ListItem>
        <ListItem>
          <Plus /> Live collaboration
        </ListItem>
        <ListItem>
          <Plus /> Live demo/share
        </ListItem>
        <ListItem>
          <Plus /> As a website or can be installed
        </ListItem>
        <ListItem>
          <Plus /> Can work offline when installed
        </ListItem>
        <ListItem>
          <Less /> Can be slow to load
        </ListItem>
        <ListItem>
          <Less /> Lack of polish
        </ListItem>
      </List>
    </Text>
  </Slide>
)
