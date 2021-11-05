// All the child Elements Should Wrapped in a Parent
// Every tag should have a closing tag
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import Product from "./Components/Products/Product";
import "./App.css";
import Header from "./Components/Header/Header";
import UserData from "./UserData/UserData";
import Pagination from "./Components/Pagination/Pagination";

// const myName = "shiva";
// We need to pass the data from one component another component
// Props --> Properties and it is used transfer the data from one component to another component
// Props are immutable
function App() {

    const products = [
        {
            id : 1,
            name : "Iphone 12 pro",
            desc : "Iphone 12 pro is build with m13 ionic chip",
            price : 120000,
        },
        {
            id : 2,
            name : "One Plus 9",
            desc : " build with m13 ionic chip",
            price : 90000,
        },
        {
            id : 3,
            name : "Redmi 9 prime",
            desc : "Iphone 12 pro is build with m13 ionic chip",
            price : 120000,
        },
        {
            id : 4,
            name : "Iphone 5s",
            desc : "Iphone 12 pro is build with m13 ionic chip",
            price : 120000,
        },
        {
            id : 5,
            name : "Iwatch 6",
            desc : "Iwatch 6 is build with m13 ionic chip",
            price : 60000,
        },
    ]
  return (
    <div>
      {/* Header */}
      {/* Banner Image */}
      <Header />

      {/* <div>
        <p className="error">An Error Occured</p>
      </div> */}

      {/* <section className="border border-primary m-3 p-3"> */}
        {/* <Product
          name="Iphone 12 pro"
          desc="Iphone 12 pro is build with m13 ionic chip"
          price={120000}
        />
        <Product
          name="Redmi 9 prime"
          desc="Redmi 9 prime is build with Metal Body"
          price={10000}
        />
        <Product
          name="One Plus"
          desc="Oneplus maintains high quality"
          price={900000}
        /> */}

          {/* {
             products.map((product)=>(
                <Product
                name={product.name}
                desc={product.desc}
                price={product.price}
              />  
             )) 
          } */}

      {/* </section> */}
      {/* <UserData/> */}
      <Pagination/>
    </div>
  );
}
export default App;
