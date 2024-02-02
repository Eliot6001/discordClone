import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/currentProfile";
import { MemberRole } from "@prisma/client";
/*
Req body data: 
Object { 
  name: String, 
  imageUrl: String
} => upload to supabase
        return to client server id with pic.
*/

export async function POST(req: NextRequest) {
  try {
    const { name, imageUrl } = await req.json();
    const profile = await currentProfile();
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    console.log("Error Finder >> ", profile)
    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name,
        imageUrl,
        inviteCode: uuidv4(),
        channels: {
          create: {  profileId: profile.id , name: "general"},
        },
        members: {
          create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
        },
      },
    });
    return NextResponse.json(server);
  } catch (error) {
    console.log("Servers/create/route::POST", error);
    return new NextResponse("Internal error, ", { status: 500 });
  }
}
export async function GET(req: NextRequest) {
  const res = "test";

  return new Response(JSON.stringify({ res: res }));
}
