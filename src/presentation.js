import React from "react";
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";

import createTheme from "spectacle/lib/themes/default";
import Intro from "./slide/intro";
import "tachyons/css/tachyons.min.css";
import DesignAndProgramming from "./slide/designAndProgramming";
import DesignSystems from "./slide/designSystems";
import WhyFigma from "./slide/whyFigma";
import Questions from "./slide/questions";
import Me from "./slide/me";
import WhatIsTeamstarter from "./slide/whatIsTeamstarter";
import seedStages from "./slide/seedStages";
import manyHats from "./slide/manyHats";
import sectionTech from "./slide/sectionTech";
import simpleCode from "./slide/simpleCode";
import useWhatYouKnow from "./slide/useWhatYouKnow";
import goodPractices from "./slide/goodPractices";
import useServices from "./slide/useServices";
import favoriteTech from "./slide/favoriteTech";
import sectionProduct from "./slide/sectionProduct";
import goingFromCanToShould from "./slide/goingFromCanToShould";
import specifications from "./slide/specifications";
import sectionUX from "./slide/sectionUX";
import uxTips from "./slide/uxTips";
import uiTips from "./slide/uiTips";
import sectionSoftSkills from "./slide/sectionSoftSkills";
import figmaDemo from "./slide/figmaDemo";

require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#ff00ac",
    quartenary: "#00dade",
    cinquo: "#ffe400"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
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
        {useServices}
        {favoriteTech}
        {/* PRODUCT */}
        {sectionProduct}
        {goingFromCanToShould}
        {specifications}
        {/* UI/UX */}
        {sectionUX}
        {DesignAndProgramming}
        {DesignSystems}
        {WhyFigma}
        {figmaDemo}
        {uxTips}
        {uiTips}
        {/* Soft skills */}
        {sectionSoftSkills}
        <Slide
          transition={["fade"]}
          bgColor="primary"
          progressColor="secondary"
          controlColor="secondary"
        >
          <Heading size={6} textColor="tertiary" caps fit>
            DEMO TIME (again)
          </Heading>
          <Text size={6} textColor="quartenary" margin="20px 0" bold>
            Teamstarter design system
          </Text>
        </Slide>
        {Questions}
      </Deck>
    );
  }
}
