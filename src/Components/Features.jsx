import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../Images/1.svg";
import fimage2 from "../Images/2.svg";
import fimage3 from "../Images/3.svg";
import fimage4 from "../Images/4.svg";

const Features = () => {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox
          image={fimage1}
          title="WeightLifting"
          description="Build Your Strength"
        />
        <Featurebox
          image={fimage2}
          title="Cardio"
          description="Make Your Muscle Deatil"
        />
        <Featurebox
          image={fimage3}
          title="Flexing"
          description="Buid and Flex Muscle"
        />
        <Featurebox
          image={fimage4}
          title="Weight Loss Exercise"
          description="Let's Lose Weight"
        />
      </div>
    </div>
  );
};

export default Features;
