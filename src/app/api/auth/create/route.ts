import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";
import { hash } from 'bcrypt';
interface UserInfo {
    username: string,
    password: string
}

export async function POST(request:NextRequest) {
    let userInfo:UserInfo = {username:"",password:""};
    try {
        userInfo = await request.json();
        console.log("got user info")
    } catch (error) {
        return NextResponse.json("bad data");
    }
    console.log("past user info awaiting hash")
    console.log(userInfo)
    let hashedPassword = await hash(userInfo.password,10);
    let user = await prisma.maintainer.create({
        data: {
            username: userInfo.username,
            password: hashedPassword
        }
    })
    console.log("created user")
    console.log(user)
    return NextResponse.json({
        text: "created user",
        user: user
    })
}