'use client';

import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Form() {

    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);

    const handleData = (key,value) => {
        setData((preData) => {
            return {
                ...(preData ?? {}),
                [key]: value
            }
        })
    }

    const handleCreate = async() => {
      
    }

    return (
      <div className="flex flex-col gap-3bg-white rounded-xl p-5 w-full md:w-[400px]">
        <h1 className="font-semibold">Create Category</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate();
          }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="category-name" className="text-gray-500 text-sm">
              Image <span className="text-red-500">*</span>{" "}
            </label>
            {image && (
              <div className="flex justify-center items-center p-3">
                <img className='h-20' src={URL.createObjectURL(image)} alt="category image" />
              </div>
            )}
            <input
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setImage(e.target.files[0]);
                }
              }}
              id="category-image"
              name="category-image"
              type="file"
              className="border px-4 py-2 rounded-lg w-full focus:outline-none"
              required
            />
          </div>
          {/* <div className="flex flex-col gap-1">
            <label htmlFor="category-name" className="text-gray-500 text-sm">
              Video <span className="text-red-500">*</span>{" "}
            </label>
            <input
              id="category-video"
              name="category-video"
              type="file"
              accept="video/*"
              className="border px-4 py-2 rounded-lg w-full focus:outline-none"
              required
            />
          </div> */}
          <div className="flex flex-col gap-1">
            <label htmlFor="category-name" className="text-gray-500 text-sm">
              Name <span className="text-red-500">*</span>{" "}
            </label>
            <input
              id="category-name"
              name="category-name"
              type="text"
              placeholder="Category Name"
              value={data?.name ?? ""}
              onChange={(e) => {
                handleData("name", e.target.value);
              }}
              className="border px-4 py-2 rounded-lg w-full focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category-name" className="text-gray-500 text-sm">
              Slug <span className="text-red-500">*</span>{" "}
            </label>
            <input
              id="category-slug"
              name="category-slug"
              type="text"
              placeholder="Category slug"
              value={data?.slug ?? ""}
              onChange={(e) => {
                handleData("slug", e.target.value);
              }}
              className="border px-4 py-2 rounded-lg w-full focus:outline-none"
              required
            />
          </div>
          <Button type="submit">Create</Button>
        </form>
      </div>
    );
}