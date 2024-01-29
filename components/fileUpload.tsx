"use client";
import React from "react";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadThing";

import "@uploadthing/react/styles.css";

/**
 * Uploadthing component used along with code that check for filetype of an image JPG/GIF
 * 
 */
interface fileuploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}
const fileUpload: React.FC<fileuploadProps> = ({
  onChange,
  value,
  endpoint,
}) => {
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image src={value} fill alt="upload" className="rounded-full" />
        <button
          onClick={() => {
            onChange("");
          }}
          type="button"
          className="right-0 top-0 bg-rose-500 text-white p-1 shadow-sm absolute rounded-full"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      className=" focus-visible:outline-dashed focus:border-0"
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default fileUpload;
