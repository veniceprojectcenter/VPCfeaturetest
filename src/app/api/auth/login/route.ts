import {NextRequest, NextResponse} from "next/server";
import jwt from 'jsonwebtoken'
import {Maintainer} from "@prisma/client";
import {compare} from "bcrypt";
import {prisma} from "@/app/api/db";
import {cookies} from "next/headers";

const expireHours = 5;

export type AuthResponce = {
    authenticated: boolean
    name: string
}

export async function POST(request:NextRequest) {
    let maintainer:Maintainer;
    try {
        maintainer = await request.json();
    } catch (error) {
        return NextResponse.json("improper format")
    }

    let secret = process.env.JWT_SECRET;
    if(secret == undefined) {
        return NextResponse.json("Server Error")
    }
    let valid = await login(maintainer.username,maintainer.password);
    console.log(valid)
    if(!valid) {
        let authResponce:AuthResponce = {
            authenticated:false,
            name:maintainer.username
        }
        return NextResponse.json(authResponce)
    }
    let token = jwt.sign({id: maintainer.id, username: maintainer.username}, secret,{
        expiresIn:hoursToMs(5),
        algorithm: "HS256",
    })
    console.log(token)
    cookies().set("token", token, {
        expires: Date.now() + hoursToMs(5)
    });
    let authResponce:AuthResponce = {
        authenticated:true,
        name:maintainer.username
    }
    return NextResponse.json(authResponce)
}

function hoursToMs(hours:number) {
    return ((1000 * 60) * 60) * hours;
}

async function login(username:string,password:string) {
    let maintainerFromDb = await prisma.maintainer.findFirst({where:{
            username:username
    }})
    if(maintainerFromDb == null) {
        return false;
    }
    //checks if the password is valid
    return await compare(password, maintainerFromDb.password);

}