import React from "react";
import DATA_FEATURES from "../services/__mocks__/dataFeatures";
import FeatureItem from "./FeatureItem";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>

      {DATA_FEATURES.map((dataFeature, index) => {
        return (
          <FeatureItem
            key={index}
            image={dataFeature.image}
            alt={dataFeature.alt}
            title={dataFeature.title}
            text={dataFeature.text}
          />
        );
      })}
    </section>
  );
}

export default Features;
