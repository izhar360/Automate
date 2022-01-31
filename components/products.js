import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

/**
 * @author
 * @function Products
 **/

const Products = ({ products }) => {
  return products.map((product, i) => (
    <div className="card bg-green-400" key={i}>
      <div className="featured">
        <Image
          src={"https:" + product.fields.image.fields.file.url}
          width={product.fields.image.fields.file.details.image.width}
          height={product.fields.image.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info bg-green-600">
          <h4>{product.fields.title}</h4>
        </div>
        <div className="actions">
          <div>{documentToReactComponents(product.fields.description)}</div>
          <Link href={"/product/" + product.fields.slug}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default Products;
