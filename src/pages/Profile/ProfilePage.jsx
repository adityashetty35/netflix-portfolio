import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { getProfile } from "../../assets/data";

function ProfilePage({ profile }) {
  const { hero, rows } = getProfile(profile);

  return (
    <>
      <Hero {...hero} />

      <main className="content container-fluid card-container">
        {rows.map((row) => (
          <Section key={row.title} title={row.title} items={row.items} />
        ))}
      </main>
    </>
  );
}

export default ProfilePage;
