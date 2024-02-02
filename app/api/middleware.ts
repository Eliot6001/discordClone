import { type NextRequest, NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const authorization = request.headers.get("Authorization");
  const token = authorization?.split(" ")[1] || "";
  //@ts-ignore
  const decodedToken = jwt_decode(token) as any;
  const userId = decodedToken.sub;
  console.log(decodedToken, "Server decoded middleware")
  console.log(userId, "Server USERID after decode ")
  return NextResponse.next();
}

export const config = {
  matcher: "/servers/create",
};
