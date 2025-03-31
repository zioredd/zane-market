import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";
import { Product } from "../types/product";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  console.log("products", products);
  console.log("error", error);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section className="flex w-screen space-x-8 px-[4rem] my-10">
        {/* {products.map((product: Product) => (
          <div key={product.id}>
            <CategoryCard category={product.category} subcategory={} />
          </div>
        ))} */}

        <CategoryCard />
        <CategoryCard />
      </section>
      <section>
        <div className="mx-auto px-[4rem] bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Most Sold Products
            </h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">
              See all
            </button>
          </div>
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
            {products.map((product: Product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto px-[4rem] bg-white rounded-lg shadow-sm my-30">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">New Products</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">
              See all
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product: Product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
