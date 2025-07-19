export const handleResponse = (response) => {
  if (response.status == 200 || response.status == 201) {
    return response.data.data;
  }
  throw new Error(response.data.message || "Request Failed");
};

export const handleError = (response) => {
  if (response.status === 200 || response.status === 201) {
    return response.data?.data ?? response.data;
  }
  if (response.status === 204) {
    return null;
  }
  if (response.status === 400) {
    return response.message
  }
  // throw new Error(response.data?.error?.message || "Request Failed");
};
