import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-2xl mb-2">Places to Visit</h2>
      <div>
        {trip.tripData?.itinerary &&
          Object.keys(trip.tripData.itinerary).map((day, dayIndex) => (
            <div key={dayIndex} className="mb-4">
              <h3 className="font-semibold text-xl mb-4">
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {trip.tripData.itinerary[day].map((place, placeIndex) => (
                  <div key={placeIndex} className="mt-2">
                    <h4 className="font-medium text-sm text-orange-600 mb-2">
                      {place.bestTime}
                    </h4>
                    <PlaceCardItem place={place} />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
