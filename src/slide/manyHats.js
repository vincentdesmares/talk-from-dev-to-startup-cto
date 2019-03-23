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
      <p>Sum-up my experience</p>
      <p>A few keys to go forward</p>
      <p>
        Link: We will start with the Tech as it's in my opinion the least
        interessing thing of this presentation. I don't want you sleeping at the
        end :)
      </p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="black">
      ONE TITLE, MANY JOBS
    </Heading>
    <Text textColor="pink" style={{ marginTop: 30 }}>
      CODING, INFRASTRUCTURE MAINTENANCE, UI, UX, SPECIFICATIONS, TRANSLATIONS,
      SOCIAL NETWORK MANAGEMENT, BILLING, PROJECT MANAGEMENT, HIRING,
      <small>COMPETITIVE INTELLIGENCE, MARKET RESEARCH, SALES...</small>
    </Text>
    <Text textColor="blue" style={{ marginTop: 30 }}>
      That's a lot of hat!
    </Text>
    <Text
      textSize={10}
      textColor="grey"
      style={{ position: 'fixed', left: -100, bottom: 0 }}
    >
      Art by deviantart.com/darklitria
    </Text>
    <img
      alt="Many hats on a head"
      src="assets/images/hats.png"
      style={{ position: 'fixed', height: '100%', right: -200, top: 0 }}
    />
  </Slide>
)
