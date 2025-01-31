'use client'

import { useAuth } from "@/contexts/AuthContext";
import { useAdmin } from "@/lib/firestore/admins/read";
import { Avatar } from "@nextui-org/react";
import { Menu } from "lucide-react";

export default function Header({ toggleSidebar }) {
  const { user } = useAuth();
  const { data: admin } = useAdmin({email: user.email}); 

  return (
    <section className="fixed w-full top-0 flex items-center gap-3 bg-white border-b px-4 py-3">
      <div className="flex justify-center items-center md:hidden ">
        <button onClick={toggleSidebar}>
          <Menu />
        </button>
      </div>
      <div className="w-full flex justify-between items-center pr-0 md:pr-[260px]">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="md:flex gap-3 items-center hidden">
          <div className="flex flex-col items-end ">
            <h1 className="text-sm font-semibold">{admin?.name}</h1>
            <h1 className="text-xs text-gray-600">{admin?.email}</h1>
          </div>
          <Avatar size="sm" src={admin?.imageURL}></Avatar>
        </div>
      </div>
    </section>
  );
}