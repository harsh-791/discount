import { getFeaturedProducts, getProducts } from "@/lib/firestore/products/read_server";
import { Header } from "./components/Header";
import FeaturedProductSlider from "./components/Sliders";
import Collections from "./components/Collections";
import { getCollections } from "@/lib/firestore/collections/read_server";
import Categories from "./components/Categories";
import { getCategories } from "@/lib/firestore/categories/read_server";
import ProductsGridView from "./components/Products";
import CustomerReviews from "./components/CustomReviews";
import { getBrands } from "@/lib/firestore/brands/read_server";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default async function Home() {
  const[featuredProducts, collections, categories, products, brands] = await Promise.all([
    getFeaturedProducts(),
    getCollections(),
    getCategories(),
    getProducts(),
    getBrands(),
  ]) //This fetches all the data at once in parallel and waits for all of them to be fetched before rendering the page
  // const featuredProducts = await getFeaturedProducts();
  // const collections = await getCollections();
  // const categories = await getCategories();
  // const products = await getProducts();
  // const brands = await getBrands();

  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <FeaturedProductSlider featuredProducts={featuredProducts} />
      <Collections collections={collections} />
      <Categories categories={categories} />
      <ProductsGridView products={products} />
      <CustomerReviews />
      <Brands brands={brands}/> 
      <Footer />
    </main>
  );
}
