import { getFeaturedProducts } from "@/lib/firestore/products/read_server";
import { Header } from "./components/Header";
import FeaturedProductSlider from "./components/Sliders";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main>
      <Header />
      <FeaturedProductSlider featuredProducts={featuredProducts} />
    </main>
  );
}
