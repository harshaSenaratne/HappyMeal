import React from "react";

import { CompactRestaurantInfo } from "../../../components/restuarant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
