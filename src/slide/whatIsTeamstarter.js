import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="pink"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Organization allow monthly funds</p>
      <p>Each person received it continuously</p>
      <p>Anyone can create a project</p>
      <p>Anyone can back a project</p>
      <p>
        Arcade box / Christmas decorations / Raclette party / Board games /
        Conferences
      </p>
      <p>
        Link: In the presentation I will talk about my journey developing as a
        CTO. Before talking about what's a CTO, let focus on the context.
      </p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="white">
      What's teamstarter?
    </Heading>
    <Text textColor="black" fit>
      It's like kickstarter in your organization.
    </Text>
    <Text textColor="white">Your budget, your project, your culture.</Text>
    <Text textColor="white" bold style={{ marginTop: 40 }}>
      And ... a quick demo{' '}
      <span role="img" aria-label="wizard">
        🧙
      </span>
    </Text>
  </Slide>
)
