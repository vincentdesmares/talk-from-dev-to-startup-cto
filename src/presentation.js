import React from 'react'
import { Deck } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'
import Intro from './slide/intro'
import 'tachyons/css/tachyons.min.css'
import DesignAndProgramming from './slide/designAndProgramming'
import DesignSystems from './slide/designSystems'
import WhyFigma from './slide/whyFigma'
import Questions from './slide/questions'
import Me from './slide/me'
import WhatIsTeamstarter from './slide/whatIsTeamstarter'
import seedStages from './slide/seedStages'
import manyHats from './slide/manyHats'
import sectionTech from './slide/sectionTech'
import simpleCode from './slide/simpleCode'
import useWhatYouKnow from './slide/useWhatYouKnow'
import goodPractices from './slide/goodPractices'
import useServices from './slide/useServices'
import favoriteTech from './slide/favoriteTech'
import goingFromCanToShould from './slide/goingFromCanToShould'
import specifications from './slide/specifications'
import sectionUX from './slide/sectionUX'
import uiTips from './slide/uiTips'
import sectionSoftSkills from './slide/sectionSoftSkills'
import figmaDemo from './slide/figmaDemo'
import doNotLoseTouch from './slide/doNotLoseTouch'
import whyMe from './slide/whyMe'
import noUseCase from './slide/noUseCase'
import mentorship from './slide/mentorship'
import yourTouch from './slide/yourTouch'
import andThen from './slide/andThen'
import whenThingsGoBad from './slide/whenThingsGoBad'

require('normalize.css')

const theme = createTheme(
  {
    white: 'white',
    black: '#1F2022',
    pink: '#ff00ac',
    blue: '#00dade',
    yellow: '#ffe400',
    grey: '#888888'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        {Intro}
        {Me}
        {WhatIsTeamstarter}
        {seedStages}
        {manyHats}
        {/* TECH */}
        {sectionTech}
        {simpleCode}
        {useWhatYouKnow}
        {goodPractices}
        {doNotLoseTouch}
        {useServices}
        {favoriteTech}
        {/* UI/UX */}
        {sectionUX}
        {specifications}
        {whyMe}
        {noUseCase}
        {DesignAndProgramming}
        {DesignSystems}
        {WhyFigma}
        {figmaDemo}
        {uiTips}
        {/* Soft skills */}
        {sectionSoftSkills}
        {goingFromCanToShould}
        {mentorship}
        {yourTouch}
        {whenThingsGoBad}
        {andThen}
        {Questions}
      </Deck>
    )
  }
}
