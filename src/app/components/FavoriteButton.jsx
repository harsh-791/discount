"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firestore/users/read";
import { updateFavorites } from "@/lib/firestore/users/write";
import { Button } from "@nextui-org/react";
import { Heart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FavoriteButton({productId}) {
  const { user } = useAuth();
  const { data } = useUser({ uid: user?.uid });
  const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
      setIsLoading(true);
      try{
        if(!user?.uid){
          throw new Error(`Please Login to add to favorites`);
        }
        if(data?.favorites?.includes(productId)){
          const newList = data.favorites.filter((item) => item != productId);
          await updateFavorites({ list: newList, uid: user?.uid});
        } else {
          await updateFavorites({ 
            list: [...(data?.favorites || []), productId], 
            uid: user?.uid,
          });
        }
      } catch(error){
        toast.error(error?.message);
      }
      setIsLoading(false);
    }

    const isLiked = data?.favorites?.includes(productId);

    return (
      <Button
        isLoading={isLoading}
        isDisabled={isLoading}
        onClick={handleClick}
        variant="light"
        color="danger"
        className="rounded-full"
        isIconOnly
        size="sm"
      >
        {!isLiked && <FavoriteBorderOutlinedIcon fontSize="small" />}
        {isLiked && <FavoriteIcon fontSize="small" />}
      </Button>
    );
}