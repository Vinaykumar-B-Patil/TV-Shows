// src/components/ShowDetails.js
import React from 'react';
import { Link } from 'react-router-dom'; // Add this import

function ShowDetails(props) {
  const { match, shows } = props;
  const { id } = match.params;
  const show = shows.find(item => item.show.id.toString() === id);

  if (!show) {
    return <div>Loading...</div>;
  }

  const handleBookTicket = () => {
    // Implement booking logic here
    // You can use local/session storage to store user details
    // Open a form with movie name and relevant details
  };

  return (
    <div>
      <h2>Show Details</h2>
      <p>Show ID: {show.show.id}</p>
      <p>Language: {show.show.language}</p>
      <img src={show.show.image.medium} alt={show.show.name} />
      <p>{show.show.summary}</p>

      <button onClick={handleBookTicket}>Book Movie Ticket</button>
      <Link to="/">Back to Show List</Link>
    </div>
  );
}

export default ShowDetails;
