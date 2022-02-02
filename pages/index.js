import { createClient } from "contentful";
import Slide from "../components/slide";
import CategoryBar from "../components/categoryBar";
import AllProducts from "../components/AllProducts";

export async function getStaticProps() {
  const client = createClient({
    space: "69mfylvjbr0r",
    accessToken: "5lORfJX0w2Cm4vAvwQ5GoFBaW5zGhGi0pCoqIFDxTGI",
  });

  const res = await client.getEntries({ content_type: "product" });

  return {
    props: {
      products: res.items,
    },
    revalidate: 1,
  };
}

export default function Home({ products }) {
  return (
    <div className="flex flex-col justify-between">
      <CategoryBar />
      <Slide />
      <AllProducts name="Products: " products={products} />
    </div>
  );
}
