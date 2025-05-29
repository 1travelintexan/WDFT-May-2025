export const TripCard = ({ trip, handleDeleteTrip, handleAddFavorite }) => {
  return (
    <div key={trip.id} className="trip-card">
      <img src={trip.image} alt="trip image" />
      <section>
        <h3>
          {trip.destination} ({trip.days} days)
        </h3>
        <p>{trip.description}</p>
        <h6>Price: {trip.totalCost}$</h6>
        {trip.totalCost <= 350 ? (
          <p className="deal">Great Deal</p>
        ) : trip.totalCost >= 1500 ? (
          <p className="premium">Premium</p>
        ) : null}
        {trip.allInclusive && <p className="premium">All Inclusive</p>}
        <button onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
        <button onClick={() => handleAddFavorite(trip.id)}>♡</button>
      </section>
    </div>
  );
};
