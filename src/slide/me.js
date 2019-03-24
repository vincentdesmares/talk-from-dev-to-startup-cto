import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'
import Face from '../face'

export default (
  <Slide
    transition={['slide']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>
        Matters: product studio (+100 produits) / startup studio (Teamstarter)
      </p>
      <p>Link: what's teamstarter?</p>
    </Notes>
    <Face
      className="fixed"
      style={{
        bottom: '-45%',
        right: '-15%',
        width: '45%'
      }}
    />
    <Heading size={1} caps lineHeight={1} textColor="black">
      I'm Vincent DESMARES
    </Heading>
    <Text textColor="pink" fit style={{ marginTop: 50 }}>
      Working @<b>Matters.tech</b> for 8 years! <br />
      As Dev, Lead Dev and Project Manager.
    </Text>
    <Text textColor="blue" style={{ marginTop: 50 }}>
      CTO @ Teamstarter for 1 year.
    </Text>
  </Slide>
)
