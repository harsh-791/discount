"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css"; // Update the path for styles

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ size: ["extra-small", "small", "medium", "large", "huge"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link","video"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ font: [] }],
      ["clean"],
    ],
  },
};

export default function Description({ data, handleData }) {
  const handleChange = (value) => {
    handleData("description", value);
  };
  return (
    <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl h-full">
      <h1 className="font-semibold">Description</h1>
      <ReactQuill
        value={data?.description}
        onChange={handleChange}
        modules={modules}
        placeholder="Enter your description here..."
      />
    </section>
  );
}

