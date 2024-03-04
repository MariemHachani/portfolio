'use server'
import 'server-only'

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
     /* const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
   { next: { revalidate: 3600 }
  const data = await res.json()
 
  return Response.json({ data }) */
}