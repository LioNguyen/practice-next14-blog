"use client";

import axios from "axios";
import { useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = useAuth();

  const fetchData = async () => {
    const res = await axios.get("/api/posts");

    console.log("🚀 @log ~ fetchData ~ res:", res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Home Page</div>;
}
