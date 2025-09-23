import React from "react";
import { motion } from "framer-motion";
import "./MusicPage.css";

function MusicPage() {
  const genres = ["Hip-Hop", "Rap", "RnB", "Drill", "Pop"];

  const albums = [
    {
      id: 4,
      title: "Open Letter",
      artist: "Talha Anjum",
      img: "https://i.scdn.co/image/ab67616d0000b2730b5b6aa4ffa5ac32bf1ba39d",
    },
    {
      id: 2,
      title: "ROCKSTAR WITHOUT A GUITAR",
      artist: "Umair",
      img: "https://i.scdn.co/image/ab67616d0000b2733ca6a2d4508423b2e82a5fdb",
    },
    {
      id: 3,
      title: "Kohinoor",
      artist: "DIVINE",
      img: "https://i.scdn.co/image/ab67616d0000b2736bdfb9d75d9589e68ffc4075",
    },
    {
      id: 5,
      title: "Certified Lover Boy",
      artist: "Drake",
      img: "https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png",
    },
    {
      id: 5,
      title: "The Off-Season",
      artist: "J. Cole",
      img: "https://upload.wikimedia.org/wikipedia/en/7/7d/TheOff-Season.jpeg",
    },
  ];

  return (
    <motion.div
      className="music-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="music-quote">
        "Music gives a soul to the universe, wings to the mind, flight to the
        imagination, and life to everything." 🎶
      </p>

      <h2 className="music-subtitle">Explore by Genre</h2>
      <div className="genre-buttons">
        {genres.map((genre, i) => (
          <motion.button
            key={i}
            className="genre-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {genre}
          </motion.button>
        ))}
      </div>

      <h2 className="music-subtitle">Favorite Albums</h2>
      <div className="albums-grid">
        {albums.map((album, i) => (
          <motion.div
            key={album.id}
            className="album-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img src={album.img} alt={album.title} />
            <div className="album-info">
              <h3>{album.title}</h3>
              <p>by {album.artist}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MusicPage;
