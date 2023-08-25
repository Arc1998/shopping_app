import React, {createContext,useState} from "react";
const ProdContext = createContext();
const ProdContextProvider = ({ children }) => {
const [products,setProducts]=useState([])
function setCartData(item){
setProducts((prev)=>{
return[
    ...prev,
    item
]
})
}
  return (
    <ProdContext.Provider value={{products,setCartData}}>
      {children}
    </ProdContext.Provider>
  );
};

export { ProdContext, ProdContextProvider };