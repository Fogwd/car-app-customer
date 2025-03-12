"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fakeUser = {
      id: 1,
      name: "John Doe",
      email,
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    };

    localStorage.setItem("authToken", "fake-token-123");
    localStorage.setItem("user", JSON.stringify(fakeUser));

    router.push("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="mb-2 w-full rounded border p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 w-full rounded border p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full rounded bg-blue-500 p-2 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
