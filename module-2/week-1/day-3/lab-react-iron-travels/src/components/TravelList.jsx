import { useState } from "react";
import travelPlanData from "../assets/travel-plans.json";
import { TripCard } from "./TripCard";

export const TravelList = () => {
  const [trips, setTrips] = useState(travelPlanData);
  const [favs, setFavs] = useState([]);
  //my functions
  function handleDeleteTrip(id) {
    const filteredTrips = trips.filter((oneTrip) => oneTrip.id !== id);
    setTrips(filteredTrips);
  }
  function handleAddFavorite(tripId) {
    const tripInFavs = favs.find((oneTrip) => oneTrip.id === tripId);

    if (!tripInFavs) {
      const foundTrip = trips.find((oneTrip) => oneTrip.id === tripId);
      setFavs([foundTrip, ...favs]);
    }
  }
  return (
    <div className="trips-page">
      <section id="trips-section">
        <h2>Trips:</h2>
        {trips.map((trip) => {
          return (
            <TripCard
              key={trip.id}
              trip={trip}
              handleDeleteTrip={handleDeleteTrip}
              handleAddFavorite={handleAddFavorite}
            />
          );
        })}
      </section>
      <section id="favorites-section">
        <h2>Favorites:</h2>
        {favs.map((oneFav) => {
          return (
            <div key={oneFav.id} className="fav-card">
              <img src={oneFav.image} alt="trip image" />
              <h6>
                {oneFav.destination} ({oneFav.days} days)
              </h6>
              <h6>Price: {oneFav.totalCost}$</h6>
            </div>
          );
        })}
      </section>
    </div>
  );
};
