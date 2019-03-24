import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'

export default (
  <Slide
    transition={['slide']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>And because it will prepare you to your future job.</p>
      <p>No other person to do it.</p>
    </Notes>
    <Heading size={2} caps lineHeight={1} textColor="blue">
      Why me?
    </Heading>
    <Text bold style={{ marginTop: 50, marginBottom: 50 }}>
      BECAUSE YOU'RE MOST LIKELY THE ONE WITH THE BEST VIEW OF WHAT THE PRODUCT
      IS IN REALITY.
    </Text>
    <Text>
      BECAUSE YOU CAN MAKE SURE THAT BOTH THE TECH AND THE PRODUCT SPECS SHARE
      THE SAME TERMS.
    </Text>
    <Text style={{ marginTop: 20 }} textColor="pink">
      Because YOU will be the most impacted by the communcation problems around
      it.
    </Text>
  </Slide>
)
