import React from "react";
import { useParams } from "react-router-dom";

const MarketplaceIndexOverview = ({ marketData }) => {
  const { marketplaceId } = useParams();
  console.log(marketData);
  console.log(marketplaceId);
  const pickedMarketCard = marketData.find(({ id }) => id === marketplaceId);

  return <div>{pickedMarketCard.id}</div>;
};

export default MarketplaceIndexOverview;
