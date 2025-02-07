import product from "@/assets/pr1.jpg";

import ProductCard from "@/components/ProductCard";

const page = () => {
  const products: productType[] = [
    {
      id: 100,
      image: product.src,
      stockCount: 100,
      title: "Stylish men footwear",
    },
    {
      id: 20,
      image: product.src,
      stockCount: 100,
      title: "Stylish men footwear",
    },
    {
      id: 35,
      image: product.src,
      stockCount: 100,
      title: "Stylish men footwear",
    },
    {
      id: 10,
      image: product.src,
      stockCount: 100,
      title: "Stylish men footwear",
    },
    {
      id: 13,
      image: product.src,
      stockCount: 100,
      title: "Stylish men footwear",
    },
  ];

  return (
    <section className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 gap-3 p-2">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};

export default page;
