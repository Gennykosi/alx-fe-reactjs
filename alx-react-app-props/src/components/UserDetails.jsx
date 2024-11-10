// UserDetails.jsx

import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Consume userData from UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
