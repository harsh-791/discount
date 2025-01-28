"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firestore/user/read";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import { updateCarts } from "@/lib/firestore/user/write";

export default function AddToCartButton({ productId, type }) {
  const { user } = useAuth();
  const { data } = useUser({ uid: user?.uid });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isAdded = data?.carts?.find((item)=> item?.id === productId);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (!user?.uid) {
        router.push("/login");
        throw new Error(`Please Login to add to favorites`);
      }
      if (isAdded) {
        const newList = data?.carts?.filter((item) => item?.id != productId);
        await updateCarts({ list: newList, uid: user?.uid });
      } else {
        await updateCarts({
          list: [...(data?.carts || []), { id: productId, quantity: 1 }],
          uid: user?.uid,
        });
      }
    } catch (error) {
      toast.error(error?.message);
    }
    setIsLoading(false);
  };

  if(type==="large") {
    return (
      <Button
      isLoading={isLoading}
      isDisabled={isLoading}
      onClick={handleClick}
      variant="bordered"
      className="text-blue-500 bg-white text-xs md:text-sm"
      size="sm"
    >
      {!isAdded && <AddShoppingCartIcon fontSize="small" />}
      {isAdded && <ShoppingCartIcon fontSize="small" />}
      {!isAdded && "Add To Cart"}
      {isAdded && "Click To Remove"}
    </Button>
    )
  }

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading}
      onClick={handleClick}
      variant="flat"
      isIconOnly
      size="sm"
    >
      {!isAdded && <AddShoppingCartIcon fontSize="small" />}
      {isAdded && <ShoppingCartIcon fontSize="small" />}
    </Button>
  );
}
