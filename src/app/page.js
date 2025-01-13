import { getFeaturedProducts } from "@/lib/firestore/products/read_server";
import { Header } from "./components/Header";
import FeaturedProductSlider from "./components/Sliders";
import Collections from "./components/Collections";
import { getCollections } from "@/lib/firestore/collections/read_server";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const collections = await getCollections();

  return (
    <main className="flex flex-col w-screen overflow-x-hidden">
      <Header />
      <FeaturedProductSlider featuredProducts={featuredProducts} />
      <Collections collections={collections} />
    </main>
  );
}
