import ConfirmationDialog from "../../components/Day7/ConfirmationDialog";
import BookFormModal from "../../components/Day7/BookFormModal";
import BookListItem from "../../components/Day7/BookListItem";
import useBookList from "../../hooks/useBookList";

const BookList = () => {
  const {
    books,
    // loading,
    error,
    deleteConfirmationOpen,
    isAddBookDialogOpen,
    setDeleteConfirmationDialog,
    confirmDelete,
    setAddBookDialog,
    handleAddBook,
  } = useBookList();

  // if (false) {
  //   return <div className="p-6">Loading Books...</div>;
  // }

  return (
    <div className="p-6 w-[1000px] mx-auto mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Book Library</h1>
        <button
          onClick={() => setAddBookDialog(true)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline"
        >
          Add New Book
        </button>
      </div>
      {books && books.length > 0 ? (
        <ul className="space-y-3">
          {books.map((book) => (
            <BookListItem
              key={book.id}
              book={book}
              onDelete={setDeleteConfirmationDialog}
            />
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 italic">
          No books available in your library.
        </p>
      )}

      <ConfirmationDialog
        onConfirm={confirmDelete}
        isOpen={deleteConfirmationOpen}
        onCancel={() => {
          setDeleteConfirmationDialog();
        }}
        message="Are you sure you want to delete this book?"
      />

      <BookFormModal
        error={error}
        isOpen={isAddBookDialogOpen}
        onClose={() => setAddBookDialog(false)}
        onSubmit={handleAddBook}
      />
    </div>
  );
};

export default BookList;
