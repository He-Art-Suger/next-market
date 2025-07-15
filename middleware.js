import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request){
    // const token = await request.headers.get("Authorization")?.split(" ")[1]
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc1MTg1MjQyOH0.Cuy2pqKNSS3COBAmmhloxV2EiQarJj887qxtenBYsWw"

    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }

    try{
        const secretKey = new TextEncoder().encode("next-market-route-handlers")
        const decodedJwt = await jwtVerify(token, secretKey)
        return NextResponse.next()
    }catch{
        return NextResponse.json({message: "トークンが正しくないので、ログインしてください"})
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}
