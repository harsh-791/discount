'use client';

import Slider from "react-slick";

export default function FeaturedProductSlider({ featuredProducts }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
        {featuredProducts.map((product) => {
          {
            console.log(product);
          }
          return (
            <div>
              <div
                key={product?.id}
                className="flex gap-4 bg-[#f8f8f8] p-10 md:p-20 w-full"
              >
                <div className="flex-1 flex flex-col gap-5">
                  <h1 className="text-4xl font-semibold">{product?.title}</h1>
                  <h1 className="text-gray-600 text-sm max-w-96 line-clamp-2">
                    {product?.shortDescription}
                  </h1>
                </div>
                <div>
                  <img
                    className="h-[20rem]"
                    src={product?.featureImageURL}
                    alt="Featured Product"
                  />
                </div>
              </div>
            </div>
          );
        })}
    </Slider>
  );
}