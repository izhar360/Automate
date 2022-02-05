import Slide from "../components/slide";
import CategoryBar from "../components/categoryBar";
import AllProducts from "../components/AllProducts";
import Navbar from "../components/navbar";
import { useState } from "react";

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
//     revalidate: 1,
//   };
// }

export default function Home() {
  const [searchTerm, setSearchTerm] = useState();
  const [searchedItems, setSearchItems] = useState();
  console.log("the search term: ", searchTerm);
  console.log("the retured items: ", searchedItems);

  return (
    <div className="flex flex-col justify-between">
      <Navbar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setSearchItems={setSearchItems}
      />
      {searchTerm?.length === undefined || searchTerm?.length === 0 ? (
        <CategoryBar />
      ) : null}
      {searchTerm?.length === undefined || searchTerm?.length === 0 ? (
        <Slide />
      ) : null}

      <AllProducts products={searchedItems} />
      {/* products={searchTerm?.length !== 0 ? searchedItems : products} */}
    </div>
  );
}
