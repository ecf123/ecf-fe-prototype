import React from 'react'
import { useParams } from "react-router-dom";
import "./"

// path: /marketplace/:marketplaceId

const MarketplaceIndex = ({ marketData }) => {
  const { marketId } = useParams();

  const picketedMarketCard = marketData.filter(marketCard => {
    let selectedMarketCard = {}
    if (marketCard.id === marketId) {
      selectedMarketCard = marketCard
    }
    return selectedMarketCard;
  })

  return (
    <div></div>
  )
}

export default MarketplaceIndex