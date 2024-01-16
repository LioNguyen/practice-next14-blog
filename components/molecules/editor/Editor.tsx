import dynamic from "next/dynamic";
import React from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface EditorProps {
  className?: string;
  value: string;
  onChange: any;
}

export function Editor({ value, onChange }: EditorProps) {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    // [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    // ["image"],
    ["link"],

    ["clean"], // remove formatting button
  ];

  return (
    <ReactQuill
      className="h-[500px]"
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: toolbarOptions,
      }}
    />
  );
}
