import React, { useEffect, useState } from 'react';
import { client } from "./client.js";
import About from './components/About.jsx';
import Header from "./components/Header";


function App() {
  const [profile, setProfile] = useState(null);
  const [work, setWork] = useState(null);


  useEffect(() => {
      client.fetch(`*[_type == "profile"]`).then((data) => setProfile(data));
      client.fetch(`*[_type == "work"]`).then((data) => setWork(data));
  },[])
  return (
    <div className="bg-transparent m-0 w-full">
      <Header profile={profile} work={work} />
      <About profile={profile} />
    </div>
  );
}

export default App;
