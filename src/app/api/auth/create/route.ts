import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";
import { hash } from 'bcrypt';
import {getServerSession} from "next-auth";
interface UserInfo {
    username: string,
    password: string
}

export async function POST(request:NextRequest) {
    let userEmail = {id:"", email:""}
    try {
        userEmail = await request.json();
        console.log("got user info")
    } catch (error) {
        return NextResponse.json("bad data");
    }
    let addedEmail = prisma.validEmails.upsert({
        where: {
            id:userEmail.id
        },
        update: {
            email:userEmail.email
        },
        create: {
            email:userEmail.email
        }
    })
    return NextResponse.json({
        text: "created user",
        user: addedEmail
    })
}