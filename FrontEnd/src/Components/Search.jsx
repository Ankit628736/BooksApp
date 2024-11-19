import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cart from './Cart';

const SearchResults = () => {
  const { term } = useParams();
  const [book, setBook] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:3000/book');
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  useEffect(() => {
    if (term) {
      const results = book.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredBooks(results);
    } else {
      setFilteredBooks([]);
    }
  }, [term, book]);

  return (
    <div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 m-10">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <Cart items={item} key={item.id} />
          ))
        ) : (
          <p>No results found for {term}.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
