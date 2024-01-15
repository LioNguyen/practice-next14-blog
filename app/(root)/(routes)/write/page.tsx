"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "react-quill/dist/quill.snow.css";

import { EditorPage } from "@/components/templates/editor-page/EditorPage";
import { useApi } from "@/hooks/useApi";
import { useRouter } from "next/navigation";
import Loader from "@/components/molecules/loader/Loader";

export default function WritePage() {
  const router = useRouter();
  const [postData, setPostData] = useState({
    title: "",
    description: "",
  });

  const { fetchData, isLoading, data, error } = useApi(
    "/api/posts",
    "POST",
    postData
  );

  const handleChange = (value: any) => {
    setPostData({
      ...postData,
      ...value,
    });
  };

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong");
      return;
    }
    if (data) {
      toast.success("Create post successfully");
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  return (
    <>
      {isLoading ? <Loader /> : <></>}
      <EditorPage
        title={postData.title}
        value={postData.description}
        onChange={handleChange}
        onPublish={fetchData}
      />
    </>
  );
}
