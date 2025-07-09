import axios from "axios";
import { useEffect, useState } from "react";
import BackButton from "../../common/BackButon";

const ListProduct = () => {
  const [products, setProduct] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProduct(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-warp justify-center gap-4 my-4">
        <div className="grid grid-cols-5 gap-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 w-60 hover:shadow-xl transition-transform transform hover:scale-106 cursor-pointer"
            >
              <img
                src={item.image}
                className="w-full h-50 object-contain rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <div className="text-xl font-bold text-green-600 mt-2">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BackButton />
    </>
  );
};

export default ListProduct;
