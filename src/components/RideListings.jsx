
const RideListings = ({ rides, onBook }) => {
    return (
      <div className="ride-listings">
        <h2>Available Rides</h2>
        {rides.map((ride, index) => (
          <div key={index} className="ride-card">
            <h3>Driver: {ride.driver}</h3>
            <p>Route: {ride.route}</p>
            <p>Fare: ${ride.fare}</p>
            <button onClick={() => onBook(ride)}>Book Ride</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default RideListings;
  