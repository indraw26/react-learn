import { useEffect, useState } from "react";
import { addBook, deleteBook, getAllBooks } from "../services/bookService";

const useBookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [bookDeletedId, setBookDeletedId] = useState(null);
  const [isAddBookDialogOpen, setIsAddBookDialogOpen] = useState(false);

  // Fetching Data Book
  const fetchBook = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getAllBooks();
      setBooks(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  },[]);

  // Set Add Book Dialog (Add Modal)
  const setAddBookDialog = async (boolean) => {
    setIsAddBookDialogOpen(boolean);
  };

  // Set Delete Confirmation Dialog (Confirmation Delete Modal)
  const setDeleteConfirmationDialog = (id = null) => {
  setBookDeletedId(id);
  setDeleteConfirmationOpen(id !== null);
};

  // Confirm Delete
  const confirmDelete = async () => {
    setIsLoading(true);
    if (bookDeletedId) {
      try {
        await deleteBook(bookDeletedId);
        await fetchBook();
        setError(null);
        setDeleteConfirmationDialog()
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAddBook = async (newBookData) => {
    try {
      await addBook(newBookData);
      await fetchBook();
      setError(null);
      setIsAddBookDialogOpen(false);
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    }
  };

  return {
    books,
    loading,
    error,
    deleteConfirmationOpen,
    isAddBookDialogOpen,
    setDeleteConfirmationDialog,
    confirmDelete,
    setAddBookDialog,
    handleAddBook
  }
};

export default useBookList