// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// function CartContextProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);


//   useEffect(() => {
//     if (isLoaded) {
//       localStorage.setItem("E-Commerce-CartItems", JSON.stringify(cartItems));
//       console.log("local storage mae add hogae hae data", cartItems);
//     }
//   }, [cartItems]);

//   useEffect(() => {
//     console.log("item add hhorahe hae");
//     const itemsFromStorage = localStorage.getItem("E-Commerce-CartItems");
//     console.log("itemsFromStorage=>", itemsFromStorage);
//     if (itemsFromStorage) {
//       setCartItems([...JSON.parse(itemsFromStorage)]);
//       setIsLoaded(true);
//     }
//   }, []);

//   function addItemToCart(item) {
//     const arr = cartItems;
//     const itemIndex = cartItems.findIndex((data) => {
//       data.id == item.id
//       console.log(data, "yae data");
//     })
//     if (itemIndex == -1) {
//       arr.push({ ...item, quantity: 1 });
//       console.log("add hogaya");
//     }
//     setCartItems([...arr]);
//   }

//   function lessQuanityFromCart(id) {
//     const arr = cartItems;
//     const itemIndex = cartItems.findIndex((data) => data.id == id);
//     arr[itemIndex].quantity--;
//     setCartItems([...arr]);
//   }

//   function removeItemFromCart(id) {
//     const arr = cartItems;
//     const itemIndex = cartItems.findIndex((data) => data.id == id);
//     arr.splice(itemIndex, 1);
//     setCartItems([...arr]);
//   }


//   function isItemAdded(id) {
//     const arr = cartItems;
//     const itemIndex = cartItems.findIndex((data) => data._id == id);
//     if (itemIndex == -1) {
//       return null;
//     } else {
//       return arr[itemIndex];
//     }
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         setCartItems,
//         addItemToCart,
//         lessQuanityFromCart,
//         removeItemFromCart,
//         isItemAdded,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export default CartContextProvider;


import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // On component mount, retrieve cart items from localStorage
  useEffect(() => {
    const itemsFromStorage = localStorage.getItem("E-Commerce-CartItems");
    if (itemsFromStorage) {
      setCartItems(JSON.parse(itemsFromStorage));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("E-Commerce-CartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  function addItemToCart(item) {
        const arr = cartItems;
        const itemIndex = cartItems.findIndex((data) => {
          data.id == item.id
          console.log(data, "yae data");
        })
        if (itemIndex == -1) {
          arr.push({ ...item, quantity: 1 });
          console.log("add hogaya");
        }
        setCartItems([...arr]);
      }
    
      function lessQuanityFromCart(id) {
        const arr = cartItems;
        const itemIndex = cartItems.findIndex((data) => data.id == id);
        arr[itemIndex].quantity--;
        setCartItems([...arr]);
      }
    
      function removeItemFromCart(id) {
        const arr = cartItems;
        const itemIndex = cartItems.findIndex((data) => data.id == id);
        arr.splice(itemIndex, 1);
        setCartItems([...arr]);
      }
    
    
      function isItemAdded(id) {
        const arr = cartItems;
        const itemIndex = cartItems.findIndex((data) => data._id == id);
        if (itemIndex == -1) {
          return null;
        } else {
          return arr[itemIndex];
        }
      }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        lessQuanityFromCart,
        removeItemFromCart,
        isItemAdded,
        setCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
