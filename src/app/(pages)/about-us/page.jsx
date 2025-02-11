import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen p-5 md:p-10">
      <section className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="text-gray-600">Your Trusted Shopping Destination</p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-gray-600">
              We started with a simple mission: to make quality products accessible to everyone. Our journey began with a small collection of carefully curated items, and we've grown to become a trusted destination for shoppers looking for quality and value.
            </p>
          </div>
          <div className="relative h-64 w-full rounded-xl overflow-hidden">
            <img
              src="/about.png"
              alt="About Us"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="w-full py-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm">
                We ensure every product meets our high standards of quality
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Constantly improving to serve you better
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 