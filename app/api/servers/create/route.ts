import supabase from "@/lib/supabase";
import { Database } from "@/types/supabase";
import { type NextRequest } from "next/server";

/*
Req body data: 
Object { 
  name: String, 
  imageUrl: String
} => upload to supabase
        return to client server id with pic.
*/ 

export async function POST(req: NextRequest) { 
    const {name ,imageUrl} = await req.json() ;
    const { data, error } = await supabase
    .from('server_profile')
    .insert([
      {server_name: name, server_image_url: imageUrl}
    ])
    .select()
    console.log(data)
     return new Response(JSON.stringify({name, imageUrl}))
}
export async function GET(req: NextRequest) {
  const res = "test"
 
  return new Response(JSON.stringify({res: res}))
}