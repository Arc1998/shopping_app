import React, {createContext,useState} from "react";
const ItemContext = createContext();
const ItemContextProvider = ({ children }) => {
const [items,setItems]=useState([])
function setItemsData(data){
setItems((prev)=>{
return[
   ...prev,
    data
]
})
}
  return (
    <ItemContext.Provider value={{items,setItemsData}}>
      {children}
    </ItemContext.Provider>
  );
};

export {ItemContext,ItemContextProvider };