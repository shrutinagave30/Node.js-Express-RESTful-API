
const BookingConfirmation = ({ bookingDetails }) => {
    const { pickup, dropoff, passengers, ride } = bookingDetails;
    const totalFare = ride.fare * passengers;
  
    return (
      <div className="booking-confirmation">
        <h2>Booking Confirmation</h2>
        <p>Driver: {ride.driver}</p>
        <p>Route: {ride.route}</p>
        <p>Pickup: {pickup}</p>
        <p>Drop-off: {dropoff}</p>
        <p>Passengers: {passengers}</p>
        <p>Total Fare: ${totalFare}</p>
      </div>
    );
  };
  
  export default BookingConfirmation;
  