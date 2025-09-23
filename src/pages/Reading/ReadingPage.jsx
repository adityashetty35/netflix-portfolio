import React from "react";
import { motion } from "framer-motion";
import "./ReadingPage.css";

function ReadingPage() {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      lesson:
        "You do not rise to the level of your goals. You fall to the level of your systems.",
    },
    {
      id: 3,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
      lesson:
        "Spending money to show people how much money you have is the fastest way to have less money.",
    },
    {
      id: 2,
      title: "Eat That Frog",
      author: "Brian Tracy",
      img: "https://m.media-amazon.com/images/I/61ZNAnIrwwL._SL1000_.jpg",
      lesson:
        "Tackle the hardest task of your day first. It builds momentum and kills procrastination.",
    },
  ];

  return (
    <motion.div
      className="reading-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Quote Section */}
      <p className="reading-quote">
        "A reader lives a thousand lives before he dies. The man who never reads
        lives only one." 📖
      </p>

      {/* Book Section */}
      <h2 className="reading-subtitle">Favorite Reads</h2>
      <div className="books-grid">
        {books.map((book, i) => (
          <motion.div
            key={book.id}
            className="book-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img src={book.img} alt={book.title} />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="author">by {book.author}</p>
              <p className="lesson">“{book.lesson}”</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ReadingPage;
