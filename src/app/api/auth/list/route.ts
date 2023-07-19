import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";

export async function GET(request:NextRequest) {
    let allEmails = await prisma.validEmails.findMany();
    return NextResponse.json(allEmails);
}