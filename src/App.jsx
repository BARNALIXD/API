import axios from "axios";
import { useState } from "react";

const App = () => {
  const [products, setproducts] = useState([]);
  
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
    .get(api)
    .then((products) => {
      console.log(products);
      setproducts(products.data)
    })
    .catch(err => console.log (err));
  };

  const addproducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
    .post(api, {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    })
    .then((res) => { 
      console.log(res);
    })
    .catch((err) => console.log (err));
  };

console.log(products)
  return (
  <div className="pt-[5%] pl-[5%]">
  <button 
  onClick={getproducts}
  className="px-5 py-2 bg-red-300 rounded"
  >
    Call Product API
  </button>
    
    <br /> <br />

    <button 
  onClick={addproducts}
  className="px-5 py-2 bg-red-300 rounded"
  >
    Save new Product in API
  </button>

  <hr className="my-10"/>
  <ul>
    <Li className="w-1/4 p-5 bg-red-200 rounded" >Product Name</Li>
    <Li>Product Name</Li>

  </ul>

   </div>)

}

export default App;
