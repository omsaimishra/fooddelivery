import { createContext } from "react";
import { food_list } from "../assets/assets/frontend_assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null);
const StoreContextProvider=(props)=>{
  const [cartItems,setcartItems] = useState({});
  const addTocart=(itemId)=>{
    if(!cartItems[itemId]){
      setcartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart = (itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const getTotalCastAmount =()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
let itemInfo = food_list.find((product)=>product._id === item)
      totalAmount += itemInfo.price* cartItems[item];
      }
      
    }
    return totalAmount;
  }
    const contextValue ={
  food_list,
  cartItems,
  setcartItems,
  removeFromCart,
  addTocart,
  getTotalCastAmount
    }
    return(
<StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>
    )
}
export default StoreContextProvider;