
import { useState } from 'react';
import Login from './components/Login';
import RideListings from './components/RideListings';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const rides = [
    { driver: 'Jaydev', route: 'Dharwad - Hubli', fare: 50 },
    { driver: 'Sham', route: 'Vidyanagar - Keshwapur', fare: 25 },
    { driver: 'Daniel', route: 'Railway Station- U-mall', fare:20 },
    { driver:'Devansh',route:'Navanagar-CBT Hubli',fare:30},
    { driver:'rahul',route:'APMC-dharwad',fare:35},
  ];

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleRideBooking = (ride) => {
    setSelectedRide(ride);
  };

  const handleSubmitBooking = (details) => {
    setBookingDetails(details);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : bookingDetails ? (
        <BookingConfirmation bookingDetails={bookingDetails} />
      ) : selectedRide ? (
        <BookingForm ride={selectedRide} onSubmitBooking={handleSubmitBooking} />
      ) : (
        <RideListings rides={rides} onBook={handleRideBooking} />
      )}
    </div>
  );
};

export default App;
