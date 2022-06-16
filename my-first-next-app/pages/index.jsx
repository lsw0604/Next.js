import React, { useState } from 'react';
import Link from 'next/link';

const App = () => {
  const [username, setUsername] = useState();
  return (
    <div>
      <label>
        username
        <input 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <p>{username} github Search</p>
      <Link href={`/users/${username}`}>
        Search
      </Link>
    </div>
  );
};

export default App;