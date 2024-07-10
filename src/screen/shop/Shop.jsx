import { productlists } from "../../assets/data/data";
import { ProductCard2 } from "../../router";

export const Shop = () => {
  return (
    <>
      <section className="container mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {productlists.slice(0, 8).map((product) => (
              <ProductCard2
                id={product.id}
                key={product.id}
                title={product.title}
                description={product.description}
                images={product.images}
                price={product.price}
                discount={product.discount}
                rating={product.rating}
                featured={product.featured}
                category={product.category}
                color={product.color}
              />
            ))}
      </section>
    </>
  );
};
