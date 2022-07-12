import React from "react";
import { useParams } from "react-router-dom";
import "./MarketplaceIndexOverview.scss";

const MarketplaceIndexOverview = ({ marketData }) => {
  const { marketplaceId } = useParams();
  console.log(marketData);
  console.log(marketplaceId);
  const pickedMarketCard = marketData.find(
    ({ id }) => id === parseInt(marketplaceId)
  );

  return (
    <div className="marketplace-overview-container">
      <h1 className="marketplace-overview-container__title">Overview</h1>
      <p className="marketplace-overview-container__info">
        {pickedMarketCard.overview}
      </p>
    </div>
  );
};

export default MarketplaceIndexOverview;
