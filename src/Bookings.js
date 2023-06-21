import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [masterBookings, setMasterBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch("https://cyf-react.glitch.me/error")
    fetch("https://cyf-react.glitch.me/delayed")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error occurred while fetching data");
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setMasterBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const search = (searchVal) => {
    let filteredBookings = masterBookings.filter((abooking) => {
      console.log(abooking);
      return (
        abooking.firstName.includes(searchVal) ||
        abooking.surname.includes(searchVal)
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <p>Please wait while the data is loading...</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
