export async function GET() {
  const res = {"test": "Thank you "} 
 
  const data = res
 
  return Response.json(data)
}