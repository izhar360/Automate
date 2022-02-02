import React from "react";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import AllProducts from "../../components/AllProducts";

/**
 * @author
 * @function Category
 **/
const client = createClient({
  space: "69mfylvjbr0r",
  accessToken: "5lORfJX0w2Cm4vAvwQ5GoFBaW5zGhGi0pCoqIFDxTGI",
});

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "moters" } },
      { params: { slug: "remotes" } },
      { params: { slug: "doors" } },
      { params: { slug: "barriers" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "product",
    "fields.category": params.slug,
  });

  return {
    props: { products: items },
    revalidate: 1,
  };
};

const Category = ({ products }) => {
  const router = useRouter();
  return (
    <div className="mt-4 md:mt-6">
      <AllProducts name={router.query.slug} products={products} />;
    </div>
  );
};

export default Category;
