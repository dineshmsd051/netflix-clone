import React from 'react';
import "./PlansScreen.css";

function PlansScreen() {
    const products = [
        {
            id: 1,
            planType: "premium",
            screen: "4K + HDR"
        },
        {
            id: 2,
            planType: "standard",
            screen: "720p"
        },
        {
            id: 3,
            planType: "Basic",
            screen: "480p"
        }
    ]

  return (
    <div className="plansScreen">
      {products.map((productData) => (
        <div className="plansScreen__plan" key={productData.id}>
          <div className="plansScreen__info">
            <h5>{productData.planType}</h5>
            <h6>{productData.screen}</h6>
          </div>
          <button onClick={() => alert("feature will available soon! 🥳")}>
            Subscribe
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlansScreen