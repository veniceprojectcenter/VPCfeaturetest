import {NextRequest, NextResponse} from "next/server";
import {AutoSlideshow} from "@prisma/client";
import {prisma} from '../../db';
export async function GET(request:NextRequest) {
    let id = await request.nextUrl.searchParams.get("id");
    if(id === null) {
        let response = {
            response:"ID is null"
        }
        return JSON.stringify(response);
    } else if(id === "first") {
        try {
            const returnedSlide = await prisma.autoSlideshow.findFirst();
            return NextResponse.json(returnedSlide);
        } catch(error) {
            let response = {
                response:"Error in retrieving data from database"
            }
            return JSON.stringify(response);
        }
    } else if(id.startsWith("ID")) {
        console.log("Getting data based on ID");
        const splitted = id.split(" ");
        const idNum = +splitted[1];

        const returnedSlide = await prisma.autoSlideshow.findFirst({
            where:{
                id:idNum
            }
        });
        return NextResponse.json(returnedSlide);
    } else if(id.startsWith("random")) {

        // select random entry in the database

    } else {
        let response = {
            response:"Incomprehensible. May God have mercy on your soul"
        }
        return JSON.stringify(response);
    }

}

export async function POST(request: NextRequest) {

    let JSoN = await request.json();
    console.log(JSoN);
    if(JSoN.type === "enterSlideshow") {
        console.log("Slideshow method about to start");
        await generateSlideshow(JSoN.backgroundColors,JSoN.pictureCaptions,JSoN.slideDelay,JSoN.pictures,JSoN.picWidth,JSoN.picHeight);
        let response = {
            response:"Slideshow Entered successfully"
        }
        console.log("AutoSlideshow method finished");
        return NextResponse.json(response);
    } else {
        let response = {
            response:"Slideshow Entered unsuccessfully"
        }
        return JSON.stringify(response);
    }

}

export async function generateSlideshow(backgroundColors:string[],pictureCaptions:string[],slideDelay:number,pictures:string[],picWidth:number,picHeight:number) {
    console.log("prisma connection established");
    try {
        console.log("Before tweet creation");
        await prisma.autoSlideshow.create({
            data: {
                backgroundColors:backgroundColors,
                pictureCaptions:pictureCaptions,
                slideDelay:slideDelay,
                pictures:pictures,
                picWidth:picWidth,
                picHeight
            }
        });
        console.log("After autoslideshow creation");
    } catch(error) {
        console.log("Database error");
        throw error;
    }

}