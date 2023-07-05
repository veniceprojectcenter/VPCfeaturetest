import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/app/api/db";

export async function GET(request:NextRequest) {
    let allMaintainers = await prisma.maintainer.findMany();
    return NextResponse.json(allMaintainers);
}