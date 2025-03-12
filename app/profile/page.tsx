"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();
  interface User {
    name: string;
    email: string;
    profileImage?: string;
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className="container mx-auto p-6 text-center">
        <Image
          src={user.profileImage || "/default-avatar.png"}
          alt="User Avatar"
          className="mx-auto my-4 size-24 rounded-full"
          width={96}
          height={96}
        />
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </Layout>
  );
}
