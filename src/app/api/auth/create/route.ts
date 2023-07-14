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
        console.log("got user info" + userInfo)
    } catch (error) {
        return NextResponse.json("bad data");
    }
    console.log("past user info awaiting hash")
    await hash(userInfo.password,10,async (err,encrypted) => {
        console.log("in hash")
        if(err != undefined) {
            return NextResponse.json(err)
        }
        try {
            console.log("trying to add hash")
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