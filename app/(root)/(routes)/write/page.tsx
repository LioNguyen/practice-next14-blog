"use client";

import { useState } from "react";
import "react-quill/dist/quill.snow.css";

import { EditorPage } from "@/components/templates/editor-page/EditorPage";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const postData = async () => {
    const res = await axios.post("/api/posts", data);

    return res.data;
  };

  const handleChange = (value: any) => {
    setData({
      ...data,
      ...value,
    });
  };

  const handleSubmit = async () => {
    try {
      const data = await postData();

      if (data) {
        router.push("/");
      }
    } catch (error) {
      console.log("🚀 @log ~ handleSubmit ~ error:", error);
    }
  };

  return (
    <EditorPage
      title={data.title}
      value={data.description}
      onChange={handleChange}
      onPublish={handleSubmit}
    />
  );
}
