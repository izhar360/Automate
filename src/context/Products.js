import React, { createContext, useEffect, useState } from "react";
import { createClient } from "contentful";

const ProductsContext = createContext();

const client = createClient({
  space: "69mfylvjbr0r",
  accessToken: "5lORfJX0w2Cm4vAvwQ5GoFBaW5zGhGi0pCoqIFDxTGI",
});

function ProductsContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [Products, setProducts] = useState([]);
  const [error, setError] = useState();

  useEffect(async () => {
    const res = await client.getEntries({ content_type: "product" });
    setProducts(res.items);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        Products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider, ProductsContext };
