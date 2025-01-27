import { Heart, Search, ShoppingCart, UserCircle2 } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import AuthContextProvider from "@/contexts/AuthContext";
export const Header = () => {

    const menuList = [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about-us",
      },
      {
        name: "Contact",
        link: "/contact-us",
      },
    ];

    return (
      <nav className="sticky top-0 z-50 bg-white bg-opacity-60 backdrop-blur-2xl py-1 px-4 md:py-2 md:px-16 border-b flex items-center justify-between">
        <Link href={"/"}>
          <img className="h-4 md:h-5" src="/logo.png" alt="logo" />
        </Link>
        <div className="hidden md:flex gap-2 items-center font-semibold">
          {menuList.map((item) => (
            <Link key={item?.name} href={item?.link}>
              <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                {item?.name}
              </button>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Link href={"/search"}>
            <button
              title="Search"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50"
            >
              <Search size={14} />
            </button>
          </Link>
          <Link href={"/favorites"}>
            <button
              title="Favorites"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50"
            >
              <Heart size={14} />
            </button>
          </Link>
          <Link href={"/cart"}>
            <button
              title="Cart"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50"
            >
              <ShoppingCart size={14} />
            </button>
          </Link>
          <Link href={"/account"}>
            <button
              title="Account"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50"
            >
              <UserCircle2 size={14} />
            </button>
          </Link>
          <AuthContextProvider>
            <LogoutButton />
          </AuthContextProvider>
        </div>
      </nav>
    );
}