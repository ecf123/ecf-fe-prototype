import React from "react";
import MarketplaceIndexOverview from "../../components/MarketplaceIndexOverview/MarketplaceIndexOverview";

// path: /marketplace/:marketplaceId

const MarketplaceIndex = ({ marketData }) => {
  return (
    <div>
      <MarketplaceIndexOverview marketData={marketData} />
    </div>
  );
};

export default MarketplaceIndex;
