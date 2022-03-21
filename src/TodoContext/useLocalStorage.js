import React from "react";

function useLocalStorage(itemName, initialValue){  
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(() => {
        try {        
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;  
  
          if(localStorageItem){
            parsedItem = JSON.parse(localStorageItem);
          }else{
            localStorage.setItem(itemName, JSON.stringify(initialValue)); 
            parsedItem = [];
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setLoading(false)
          setError(true);
        }
      }, 3000);
    })
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
    return {item, saveItem, loading, error};
  }

export {useLocalStorage}