import axios from "axios";
import { useEffect, useState } from "react";

const Book = () => {
  const [books, setBook] = useState([]);

  const fetchBook = async () => {
    const res = await axios.get("http://localhost:1337/api/books");
    console.log(res.data.data);
    setBook(res.data.data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div>
      {books.map((item, index) => (
        <div key={index}>
          <li>{item.title}</li> 
          <li>{item.author}</li>
          <li>{item.published_year}</li>
          <li>{item.synopsis}</li>
        </div>
      ))}
    </div>
  );
};

export default Book;
