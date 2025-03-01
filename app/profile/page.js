"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

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
        <h1 className="text-3xl font-bold">Profile Page</h1>
        <img
          src={user.profileImage || "/default-avatar.png"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto my-4"
        />
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </Layout>
  );
}
