'use client'

import { Button } from "@nextui-org/react";
import {  CheckSquare2Icon, Square } from "lucide-react";
import { useState } from "react";

export default function Checkout({ productList }) {
  const [paymentMode, setPaymentMode] = useState("prepaid");
  const totalPrice = productList?.reduce((prev, curr) => {
    return prev + curr?.product?.salePrice * curr?.quantity;
  }, 0);

  return (
    <section className="flex flex-col md:flex-row gap-3">
      <section className="flex-1 border rounded-xl p-4">
        <h1>Shipping Details</h1>
      </section>
      <div className="flex-1 flex flex-col gap-3">
        <section className="flex flex-col gap-3 border rounded-xl p-4">
          <h1>Products</h1>
          <div className="flex flex-col gap-2">
            {productList.map((item) => (
              <div key={item.id} className="flex gap-3 items-center">
                <img
                  src={item?.product?.featureImageURL}
                  alt=""
                  className="w-10 h-10 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col">
                  <h1 className="text-sm">{item?.product?.title}</h1>
                  <h3 className="text-green-600 font-semibold text-[10px]">
                    ₹ {item?.product?.salePrice}{" "}
                    <span className="text-black">X</span>{" "}
                    <span className="text-gray-600">{item?.quantity}</span>
                  </h3>
                </div>
                <div>
                  <h3 className="text-green-600 text-sm">
                    ₹ {item?.product?.salePrice * item?.quantity}{" "}
                    <span className="text-gray-600 line-through text-[10px]">
                      ₹ {item?.product?.price * item?.quantity}
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full items-center p-2">
            <h1>Total</h1>
            <h1>₹ {totalPrice}</h1>
          </div>
        </section>
        <section className="flex flex-col gap-3 border rounded-xl p-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2>Payment Mode</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPaymentMode("prepaid")}
                className="flex items-center gap-1 text-xs"
              >
                {paymentMode === "prepaid" && (
                  <CheckSquare2Icon className="text-blue-500" size={13} />
                )}
                {paymentMode === "cod" && <Square size={13} />}
                Prepaid
              </button>
              <button
                onClick={() => setPaymentMode("cod")}
                className="flex items-center gap-1 text-xs"
              >
                {paymentMode === "cod" && (
                  <CheckSquare2Icon className="text-blue-500" size={13} />
                )}
                {paymentMode === "prepaid" && <Square size={13} />}
                Cash On Delivery
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <CheckSquare2Icon className="text-blue-500" size={13} />
            <h4 className="text-xs text-gray-600">
              I agree with the{" "}
              <span className="font-semibold text-blue-500">
                terms & conditions
              </span>
            </h4>
          </div>
          <Button className="bg-black text-white">Place Order</Button>
        </section>
      </div>
    </section>
  );
}