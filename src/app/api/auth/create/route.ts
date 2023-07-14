import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";
import { hash } from 'bcrypt';
interface UserInfo {
    username: string,
    password: string
}

export async function POST(request:NextRequest) {
    console.log("user")
    let userInfo:UserInfo = {username:"",password:""};
    try {
        userInfo = await request.json();
    } catch (error) {
        return NextResponse.json("bad data");
    }
    await hash(userInfo.password,10,async (err,encrypted) => {
        if(err != undefined) {
            return NextResponse.json(err)
        }
        try {
            let user = await prisma.maintainer.create({
                data: {
                    username: userInfo.username,
                    password: encrypted
                }
            })
            return NextResponse.json({
                text: "created user",
                user: user
            })
        } catch (err) {
            return NextResponse.json(err);
        }
    })
    return NextResponse.json("added user")
}