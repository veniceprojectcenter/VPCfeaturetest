import {NextRequest, NextResponse} from "next/server";
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';
//this middleware is to validate authentication
export async function middleware(request:NextRequest) {
    let token = request.cookies.get("token")?.value;
    if(token == undefined) {
        if(request.nextUrl.pathname.includes("/edit")) {
            console.log(new URL("/",request.url).toString());
            return NextResponse.redirect(new URL("/",request.url))
        }
        return NextResponse.next();
    }
    let secret = process.env.JWT_SECRET;
    if(secret == undefined) {
        return NextResponse.next();
    }
    jwtVerify(token, new TextEncoder().encode(secret)).then((payload) => {
        if(payload.payload.exp == payload.payload.iat || payload.payload.iat == undefined || payload.payload.exp == undefined) {
            if(request.nextUrl.pathname.includes("/edit")) {
                return NextResponse.redirect(new URL("/"))
            }
        }
    }).catch(() => {
        // if the error thrown is because the JWT is unauthorized, return a 401 error
        if(request.nextUrl.pathname.includes("/edit")) {
            return NextResponse.redirect(new URL("/"))
        }
        return NextResponse.next();
    });
    return NextResponse.next();
    //TODO make it so if they are trying to get to an edit page when not logged in then throw err
}
