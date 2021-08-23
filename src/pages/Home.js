import React from "react";
import PromotedCreations from "../components/PromotedCreations"
import DemoCarousel from "../components/Carousel"
import LiveAuctions from "../components/LiveAuctions";
import Trending from "../components/Trending";
import CommunityPicks from "../components/CommunityPicks";
import RecentlySold from "../components/RecentlySold";
import CreatedSpotlight from "../components/CreatedSpotlight";

export default function Home() {
  return (
    <div>
      <DemoCarousel />
      <PromotedCreations/>
      <LiveAuctions/>
      <Trending/>
      <CommunityPicks/>
      <RecentlySold/>
      <CreatedSpotlight/>
    </div>
  )
}
