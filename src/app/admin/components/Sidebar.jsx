'use client';

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { Cat, Layers2, LayoutDashboard, LibraryBig, LogOut, PackageOpen, ShieldCheck, ShoppingCart, Star, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Sidebar() {

    const menuList = [
      {
        name: "Dashboard",
        link: "/admin",
        icon: <LayoutDashboard className="h-5 w-5" />,
      },
      {
        name: "Products",
        link: "/admin/products",
        icon: <PackageOpen className="h-5 w-5" />,
      },
      {
        name: "Categories",
        link: "/admin/categories",
        icon: <Layers2 className="h-5 w-5" />,
      },
      {
        name: "Brands",
        link: "/admin/brands",
        icon: <Cat className="h-5 w-5" />,
      },
      {
        name: "Orders",
        link: "/admin/orders",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
      {
        name: "Customers",
        link: "/admin/customers",
        icon: <User className="h-5 w-5" />,
      },
      {
        name: "Reviews",
        link: "/admin/reviews",
        icon: <Star className="h-5 w-5" />,
      },
      {
        name: "Collections",
        link: "/admin/collections",
        icon: <LibraryBig className="h-5 w-5" />,
      },
      {
        name: "Admins",
        link: "/admin/admins",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
    ];

    return (
      <section className="flex flex-col gap-10 justify-between bg-white border-r px-5 py-3 h-screen overflow-hidden w-[260px] ">
        <div className="flex justify-center py-4">
          <img className="h-8" src="/logo.png" alt="Logo" />
        </div>
        <ul className="flex flex-1 h-full overflow-y-auto flex-col gap-4">
          {/* TODO: tailwind scrollbar design */}
          {menuList.map((item) => (
            <Tab key={item?.name} item={item} />
          ))}
        </ul>
        <div className="flex justify-center">
          <button 
            onClick={async() => {
              try{
                await toast.promise(signOut(auth), {
                  error: (e) => e?.message,
                  loading: "Logging out...",
                  success: "Logged out successfully!",
                })
              } catch(error){
                toast.error(error?.message);
              }
            }}
            className="flex gap-2 items-center px-3 py-2 hover:bg-indigo-100 rounded-xl w-full justify-center ease-soft-spring duration-400 transition-all">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </section>
    );
}

function Tab({item}){
  
  const pathname = usePathname();
  const isSelected = pathname === item?.link;

  return (
    <Link key={item?.name} href={item?.link}>
        <li className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold ease-soft-spring transition-all duration-300 ${isSelected ? 'bg-[#879fff] text-white' : 'bg-white text-black'}`}>
          {item?.icon} {item?.name}
        </li>
    </Link>
  )
}