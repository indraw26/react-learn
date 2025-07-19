import BookFormModal from "../../components/Day7/BookFormModal";
import BookDetailItem from "../../components/Day7/BookDetailItem";
import useBookDetail from "../../hooks/useBookDetail";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const {
    book,
    error,
    loading,
    isUpdateBookDialogOpen,
    setUpdateBookDialog,
    handleUpdateBook,
  } = useBookDetail(useParams().id);

  if (loading) {
    return <div className="p-6">Loading book details...</div>;
  }

  if (!book) {
    return <div className="p-6">Book not found.</div>;
  }

  const bookDetailsData = [
    { label: "Author", value: book.author },
    { label: "Year", value: book.year },
    { label: "Publisher", value: book.publisher },
    { label: "Summary", value: book.summary },
    { label: "Page Count", value: book.pageCount },
    { label: "Read Page", value: book.readPage },
    { label: "Finished", value: book.isFinished },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="p-6">
        <div className="bg-white shadow-md rounded-md p-6 min-w-[800px]">
          <p className="text-3xl font-bold mb-6">Book Title</p>
          {bookDetailsData.map((item, index) => (
            <BookDetailItem
              key={index}
              label={item.label}
              value={item.value}
              className={"text-center"}
            />
          ))}
          <div className="mt-6 flex justify-end">
            <button onClick={()=> (setUpdateBookDialog(true))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Update Book
            </button>
          </div>
        </div>

        <BookFormModal
          error={error}
          isOpen={isUpdateBookDialogOpen}
          onClose={()=> (setUpdateBookDialog(false))}
          onSubmit={handleUpdateBook}
          initialBook={book}
        />
      </div>
    </div>
  );
};

export default BookDetail;
