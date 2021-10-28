
// All the child Elements Should Wrapped in a Parent
// Every tag should have a closing tag
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import Product from './Components/Products/Product';
import './App.css';
import Header from './Components/Header/Header';

// const myName = "shiva";
// We need to pass the data from one component another component
// Props --> Properties and it is used transfer the data from one component to another component 
// Props are immutable 
function App(){
    
    return(
        <div>
 {/* Header */}
 {/* Banner Image */}
           <Header/>

            {/* <Button  value="Playstore" />
            <Button value="App Store"/> */}

            {/* <Counter/> */}

            {/* <button style={styles} >App Store</button> */}
            {/* <p>My Name is {myName} </p> */}
            {/* <img src="" />
       
       <input type="text" name="" id="" /> */}

       {/* header */}
       {/* banner */}
       {/* main section */}
       {/* Footer */}


       <div>
           <p className="error">An Error Occured</p>
       </div>
 
 <section className="border border-primary m-3 p-3">
       <Product name="Iphone 12 pro" desc="Iphone 12 pro is build with m13 ionic chip"
       price={120000}/>
       <Product name="Redmi 9 prime" desc="Redmi 9 prime is build with Metal Body"
       price={10000}/>
       <Product name="One Plus" desc="Oneplus maintains high quality"
       price={900000}/>
       </section>


       </div>
       
    )
}
export default App;