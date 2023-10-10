import React ,{ useContext , useState} from "react";
import Products from "./products1";
//import  {Shopcontext} from "./shop-context";
import { CountContext } from './App';
const Cart = () => {
  const {cartitems,setcartitems}= useContext(CountContext)
 // const {removefromcart,cartitems}=useContext(Shopcontext);
   
  function Cartitem(props){
    return <div className="cartItem">
      <img src={props.img} />
      <div className="description">
        <p>{props.name}</p>
        <p>{props.price}</p>
        <button  >Remove from cart</button>
      </div>
      
    </div>
  }
  
  
  return (<div>
  <h1>your cart items</h1>
  <button onClick={()=>{
   console.log(cartitems);
  }}>button</button>
  
       {cartitems.map((product)=>
       {
        
        
        
          return<Cartitem  id={product.id} img={product.img} name={product.name} price={product.price} />;
        
       
        
       })}
       
  </div>
  
  );
  
};
export default Cart;

