import {NextRequest, NextResponse} from "next/server";
import jwt, {JwtPayload} from "jsonwebtoken"

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
    try {
        let payload = jwt.verify(token, secret);
        if(payload instanceof String) {
            if(request.nextUrl.pathname.includes("/edit")) {
                return NextResponse.redirect(new URL("/"))
            }
        }
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            // if the error thrown is because the JWT is unauthorized, return a 401 error
            if(request.nextUrl.pathname.includes("/edit")) {
                return NextResponse.redirect(new URL("/"))
            }
            return NextResponse.next();
        }
    }
    return NextResponse.next();
    //TODO make it so if they are trying to get to an edit page when not logged in then throw err
}