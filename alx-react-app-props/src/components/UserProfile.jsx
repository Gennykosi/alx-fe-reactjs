
import React, { useContext } from 'react'; // Import React and useContext
import UserContext from './UserContext';   // Import UserContext

function UserProfile() {
  // Consume userData from UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserProfile;
