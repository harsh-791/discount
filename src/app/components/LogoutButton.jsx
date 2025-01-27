'use client';

import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";

export default function LogoutButton() {
    const {user} = useAuth();
    if (!user) {
        return <></>;
    }
    return (
      <button
        onClick={async () => {
            if (!confirm("Are you sure?")) {
                return;
            }
          try {
            await toast.promise(signOut(auth), {
              error: (e) => e?.message,
              loading: "Logging out...",
              success: "Logged out successfully!",
            });
          } catch (error) {
            toast.error(error?.message);
          }
        }}
        className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-50"
      >
        <LogOut size={14} />
      </button>
    );
}