import {NextRequest, NextResponse} from "next/server";
import jwt from 'jsonwebtoken'
import {Maintainer} from "@prisma/client";
import {compare} from "bcrypt";
import {prisma} from "@/app/api/db";

export async function POST(request:NextRequest) {
    let maintainer:Maintainer;
    try {
        maintainer = await request.json();
    } catch (error) {
        return NextResponse.json("improper format")
    }
    let maintanerFromDb = await prisma.maintainer.findFirst({where:{
            username:maintainer.username
        }})
    if(maintanerFromDb == null) {
        return NextResponse.json("incorrect password or username")
    }
    let passwordCheck = await compare(maintainer.password,maintanerFromDb.password);
    if(!passwordCheck) {
        return NextResponse.json("incorrect password or username")
    }
    let token = jwt.sign({id: maintainer.id, username: maintainer.username}, "secretkey")
    return NextResponse.json(token)
}