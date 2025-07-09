import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../../common/Modal";
import TextArea from "../../common/TextArea";
import LoadingAnimation from "../../common/Loading";
import Button from "../../common/Button";

const AddData = () => {
  const [customers, setCustomer] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const getCustomerData = async () => {
    try {
      setIsFetching(true);
      const res = await axios.get("http://localhost:1337/api/customers");
      setCustomer(res.data.data);
    } finally {
      setIsFetching(false);
    }
  };

  const handlerSubmit = async () => {
    const res = await axios.post("http://localhost:1337/api/customers", {
      data: {
        name: name,
        phone_number: phone_number,
        address: address,
      },
    });
    setName("");
    setPhoneNumber("");
    setAddress("");
    if (res.status === 201) {
      alert("Data Customer berhasil ditambahkan");
    } else {
      alert("Data Customer gagal ditambahkan");
    }
    getCustomerData();
    setModalOpen(false);
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  return (
    <div className="w-[1000px] min-h-screen flex flex-col mx-auto my-6 border shadow-lg rounded-lg">
      <div className="header w-full  py-3 max-h-16 border-b-1 bg-gray-200">
        <h2 className="text-2xl font-bold text-center ">Customer Card</h2>
      </div>
      <div className="flex justify-between mx-10 my-5">
        <h3 className="text-lg ">Customer</h3>
        <button
          onClick={() => setModalOpen(true)}
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-sm text-white rounded-lg"
        >
          Tambah
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Tambah Customer</h2>
          <div className="mb-3">
            <TextArea
              label="Nama"
              variant="text"
              placeholder="Nasukkan Nama"
              eventOnChange={(e) => setName(e.target.value)}
            />
            <TextArea
              label="Nomor Telepon"
              variant="text"
              placeholder="Nasukkan Nomor Telepon"
              eventOnChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextArea
              label="Alamat"
              variant="text"
              placeholder="Nasukkan Alamat"
              eventOnChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            onClick={handlerSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
          >
            Tambah
          </button>
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
          >
            Batal
          </button>
        </Modal>
      </div>
      <div className="px-2 overflow-x-hidden">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-100 border-b">
            <tr>
              <th className="py-3 px-6 rounded-s-lg">No</th>
              <th className="py-3 px-6 rounded-s-lg">Name</th>
              <th className="py-3 px-6 rounded-s-lg">Phone Number</th>
              <th className="py-3 px-6 rounded-s-lg">Address</th>
              <th className="py-3 px-6 rounded-s-lg text-center" >Action</th>
            </tr>
          </thead>
          <tbody>
            {isFetching ? (
              <tr className="bg-white border-b text-center">
                <td
                  colSpan={5}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <LoadingAnimation/>
                </td>
              </tr>
            ) : customers.length === 0 ? (
              <tr className="bg-white border-b text-center">
                <td
                  colSpan={5}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Tidak ada Data
                </td>
              </tr>
            ) : (
              customers.map((item, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.phone_number}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.address}
                  </td>
                  <td className="flex grid-cols-2 gap-2">
                    <Button variant='yellow' label='Edit'/>
                    <Button variant='red' label='Delete' />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddData;
