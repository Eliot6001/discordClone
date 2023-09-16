import { XataClient } from "@/xata";

declare global {
  var xata: XataClient | undefined;
};

export const db = globalThis.xata || new XataClient();

if (process.env.NODE_ENV !== "production") globalThis.xata = db
