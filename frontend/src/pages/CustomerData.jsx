import axios from 'axios';

const CustomerData = () => {
  const dummyCustomers = [
    {
      name: "Andi Wijaya",
      phone_number: "081234567890",
      address: "Jl. Melati No. 12, Palembang"
    },
    {
      name: "Siti Rahma",
      phone_number: "081298765432",
      address: "Jl. Kenanga No. 8, Jakarta"
    },
    {
      name: "Budi Santoso",
      phone_number: "082112345678",
      address: "Jl. Jendral Sudirman No. 5, Bandung"
    },
    {
      name: "Rina Amelia",
      phone_number: "085678912345",
      address: "Jl. Pahlawan No. 22, Surabaya"
    },
    {
      name: "Dedi Kurniawan",
      phone_number: "081355566677",
      address: "Jl. Garuda No. 14, Medan"
    },
    {
      name: "Maya Sari",
      phone_number: "081388899900",
      address: "Jl. Merdeka No. 30, Semarang"
    },
    {
      name: "Rudi Hartono",
      phone_number: "085277889900",
      address: "Jl. Diponegoro No. 6, Yogyakarta"
    },
    {
      name: "Lina Marlina",
      phone_number: "082299887766",
      address: "Jl. Ahmad Yani No. 10, Makassar"
    },
    {
      name: "Fajar Prasetyo",
      phone_number: "081244455566",
      address: "Jl. Kartini No. 7, Denpasar"
    },
    {
      name: "Nurul Aini",
      phone_number: "081366677788",
      address: "Jl. Srikandi No. 3, Malang"
    }
  ];

  const handleCustomerData = async () => {
    try {
      for (let customer of dummyCustomers) {
        await axios.post('http://localhost:1337/api/customers', {
          data: customer
        });
      }
      alert("Semua customer berhasil dibuat!");
    } catch (error) {
      console.error("Gagal membuat data:", error);
      alert("Terjadi kesalahan saat membuat data.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleCustomerData}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Create Dummy Customers
      </button>
    </div>
  );
};

export default CustomerData;
