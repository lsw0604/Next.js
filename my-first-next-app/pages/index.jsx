import { useState } from 'react';
import { useRouter } from 'next/router';

const App = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push("/tomato")}>
        Move to tomato
      </button>
      <p>name</p>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "12px" }}
      />
      <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
        Move to {name}
      </button>
    </div>
  );
};

export default App;