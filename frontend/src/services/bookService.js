import { handleError, handleResponse } from "../api/apiUtils";
import instance from "../api/axiosinstance";

const getAllBooks = async () => {
  try {
    const response = await instance.get("/books");
    const data = handleResponse(response);
    return data;
  } catch (error) {
    handleError(error);
  }
};

const getBookById = async (id) => {
  try {
    const response = await instance.get(`/books/${id}`);
    const data = handleResponse(response);
    return data;
  } catch (error) {
    handleError(error);
  }
};

const addBook = async (bookData) => {
  try {
    const response = await instance.post("/books", { data: bookData });
    const data = handleResponse(response);
    return data?.id;
  } catch (error) {
    throw handleError(error);
  }
};

const updateBook = async (id, bookData) => {
  const { id: _, ...cleanId } = bookData;
  try {
    const response = await instance.put(`/books/${id}`, { data: cleanId });
    handleResponse(response);
    return true;
  } catch (error) {
    handleError(error);
  }
};

const deleteBook = async (id) => {
  try {
    const response = await instance.delete(`/books/${id}`);
    if (response.status !== 204) {
      handleResponse(response);
    }
    return true;
  } catch (error) {
    handleError(error);
  }
};

export { getAllBooks, getBookById, updateBook, deleteBook, addBook };
