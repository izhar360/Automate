import { useContext, useEffect } from "react";
import Slide from "../components/slide";
import CategoryBar from "../components/categoryBar";
import AllProducts from "../components/AllProducts";

import { ProductsContext } from "../src/context/Products";

// export async function getStaticProps() {
//   const client = createClient({
//     space: "69mfylvjbr0r",
//     accessToken: "5lORfJX0w2Cm4vAvwQ5GoFBaW5zGhGi0pCoqIFDxTGI",
//   });

//   const res = await client.getEntries({ content_type: "product" });

//   return {
//     props: {
//       products: res.items,
//     },
//   };
// }

export default function Home() {
  const { Products } = useContext(ProductsContext);
  useEffect(() => {
    console.log("thisisscccs ", Products);
  }, [Products]);
  return (
    <div className="container">
      <CategoryBar />
      <Slide />
      <AllProducts Products={Products} />
    </div>
  );
}
