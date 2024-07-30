import axios from "axios";

const App = () => {
  
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
    .get(api)
    .then((products) => {
      console.log(products);
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
      category: 'electronic'
    })
    .then((res) => { 
      console.log(res);
    })
    .catch((err) => console.log (err));
  };


  return (
  <div className="pt-[5%] pl-[5%]">
  <button 
  onClick={getproducts}
  className="px-5 py-2 bg-red-300 rounded"
  >
    Call Product API
  </button>
    
   </div>)

}

export default App;
