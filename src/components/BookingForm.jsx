
import { useState } from 'react';

const BookingForm = ({ ride, onSubmitBooking }) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickup && dropoff && passengers) {
      const bookingDetails = { pickup, dropoff, passengers, ride };
      onSubmitBooking(bookingDetails);
    }
  };

  return (
    <div className="booking-form">
      <h2>Book a Ride with {ride.driver}{ride.route}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Drop-off Location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          required
        />
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
