import React from "react";
import { useParams } from "react-router-dom";
import "./MarketplaceIndexOverview.scss";

const MarketplaceIndexOverview = ({ marketData }) => {
  const { marketplaceId } = useParams();
  const pickedMarketCard = marketData.find(
    ({ id }) => id === parseInt(marketplaceId)
  );

  return (
    <div className="marketplace-overview">
      <h1 className="marketplace-overview__title">Overview</h1>
      <p data-testid="overview" className="marketplace-overview__info">
        {pickedMarketCard.overview}
      </p>
    </div>
  );
};

export default MarketplaceIndexOverview;
