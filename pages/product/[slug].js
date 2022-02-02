import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";

const client = createClient({
  space: "69mfylvjbr0r",
  accessToken: "5lORfJX0w2Cm4vAvwQ5GoFBaW5zGhGi0pCoqIFDxTGI",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "product",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "product",
    "fields.slug": params.slug,
  });

  return {
    props: { product: items[0] },
    revalidate: 1,
  };
};

/**
 * @author
 * @function SingleProduct
 **/

const SingleProduct = ({ product, href }) => {
  const router = useRouter();
  if (!product) return <h2>loading...</h2>;

  const UrlContent = () => {
    const currentroute = encodeURIComponent(
      "I Would like to order: " + `http://localhost:3000${router.asPath}`
    );
    return currentroute;
  };

  const {
    Name,
    shortDescription,
    Category,
    image,
    detailedDescription,
    price,
  } = product.fields;

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-8 md:py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* <Image
           
            width={Product?.fields.image.fields.file.details.image.width}
            height={Product?.fields.image.fields.file.details.image.height}
          /> */}
          <img
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={"https:" + image.fields.file.url}
            alt="product image"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm mb-1 title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {Name}
            </h1>

            <p className="leading-relaxed mt-4 md:mt-6">{shortDescription}</p>
            <div className="leading-relaxed mt-4 md:mt-6">
              {documentToReactComponents(detailedDescription)}
            </div>

            <div className="flex justify-between mt-4 md:mt-6">
              {price && (
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
              )}
              <div>
                <a
                  className="flex ml-auto text-white bg-red-500 hover:bg-[#59d463] border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded"
                  href={`https://api.whatsapp.com/send?phone=923479313463&text=${UrlContent()}`}
                >
                  <FaWhatsapp className="text-lg md:text-xl mr-2 pt-1" />
                  Order on Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
