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
    <div class="plansScreen">
      {products.map((productData) => (
        <div className="plansScreen__plan">
          <div class="plansScreen__info">
            <h5>{productData.planType}</h5>
            <h6>{productData.screen}</h6>
          </div>
          <button>Subscribe</button>

        </div>
      ))}
    </div>
  );
}

export default PlansScreen