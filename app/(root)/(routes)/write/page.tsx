"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import "react-quill/dist/quill.snow.css";

import Loader from "@/components/molecules/loader/Loader";
import { EditorPage } from "@/components/templates/editor/EditorPage";
import { postData } from "@/lib/utils";

export default function WritePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState({
    title: "",
    description: "",
  });

  const handleChange = (value: any) => {
    setBlog({
      ...blog,
      ...value,
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await postData("/api/blog-post", blog);

      router.refresh();

      if (error) {
        toast.error("Something went wrong");
        return;
      }
      if (data) {
        toast.success("Create post successfully");
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    } catch (error) {
      console.log("🚀 @log ~ handleSubmit ~ error:", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <Loader /> : <></>}
      <EditorPage
        title={blog.title}
        value={blog.description}
        onChange={handleChange}
        onPublish={handleSubmit}
      />
    </>
  );
}
