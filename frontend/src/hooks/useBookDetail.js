import { useEffect, useState } from "react";
import { getBookById, updateBook } from "../services/bookService";

const useBookDetail = (bookId) => {
  const [book, setBook] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUpdateBookDialogOpen, setIsUpdateBookDialogOpen] = useState(false);

  const fetchBook = async () => {
    setIsLoading(true);
    try {
      const data = await getBookById(bookId);
      setBook(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const setUpdateBookDialog = async (boolean) => {
    setIsUpdateBookDialogOpen(boolean);
  };

  const handleUpdateBook = async (updatedBookData) => {
    if (bookId) {
      console.log(updatedBookData)
      try {
        updateBook(bookId, updatedBookData);
        fetchBook();
        setError(null);
        setIsUpdateBookDialogOpen(false);
        return true;
      } catch (error) {
        setError(error.message);
        return false;
      }
    }
    return false;
  };
  return {
    book,
    error,
    loading,
    isUpdateBookDialogOpen,
    setUpdateBookDialog,
    handleUpdateBook,
  };
};

export default useBookDetail;
