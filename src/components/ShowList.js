// src/components/ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';

function ShowList({ shows }) {
  return (
    <div>
      <h2>Show List</h2>
      <ul>
        {shows.map(item => (
          <li key={item.show.id}>
            <Link to={`/show/${item.show.id}`}>
              {item.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
