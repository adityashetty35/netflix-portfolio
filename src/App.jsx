import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WhosWatching from "./pages/WhosWatching/WhosWatching";

// Placeholder pages
function Recruiter() {
  return <h1>Recruiter Page</h1>;
}
function Developer() {
  return <h1>Developer Page</h1>;
}
function Stalker() {
  return <h1>Stalker Page</h1>;
}
function Adventurer() {
  return <h1>Adventurer Page</h1>;
}

function App() {
  return (
    <Routes>
      {/* Who's Watching (outside layout) */}
      <Route path="/" element={<WhosWatching />} />

      {/* All portfolio pages inside Layout */}
      <Route element={<Layout />}>
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/adventurer" element={<Adventurer />} />
      </Route>
    </Routes>
  );
}

export default App;
