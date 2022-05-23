/**
 * @description this component show data baout the API under the filter Box
 */

import React from "react";
// import { colors } from "../../Themes/appTheme";
// styled Components
import {
  AboutNasaWrapper,
  CompHeader,
  AboutData,
} from "../../styles/MainDataHolder";
// mui components
const AboutNasaMedia = () => {
  return (
    <>
      <AboutNasaWrapper>
        <CompHeader>About NASA API</CompHeader>
        <AboutData>
          State of NASA: How Cool Is That? On Feb. 12, NASA centers across the
          country hosted “State of NASA” events, following President Trump’s
          Fiscal Year 2019 budget proposal delivery to the U.S. Congress. The
          events included an...State of NASA: How Cool Is That? On Feb. 12, NASA
          centers across the country hosted “State of NASA” events, following
          President Trump’s Fiscal Year 2019 budget proposal delivery to the
          U.S. Congress. The events included an...State of NASA: How Cool Is
          That? On Feb. 12, NASA centers across the country hosted “State of
          NASA” events, following President Trump’s Fiscal Year 2019 budget
          proposal delivery to the U.S. Congress. The events included an...
        </AboutData>
      </AboutNasaWrapper>
    </>
  );
};

export default AboutNasaMedia;
