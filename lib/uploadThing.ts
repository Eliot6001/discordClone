import { generateComponents } from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 

//upload thing  - setup -
//
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();

  