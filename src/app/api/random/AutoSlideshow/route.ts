import {NextRequest, NextResponse} from "next/server";
import {AutoSlideshow} from "@prisma/client";
import {prisma} from '../../db';
import {generateSlideshow} from "./generateSlideshow";
import {generateOpenData} from "./generateOpenData";
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
            console.log(returnedSlide);
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
        await generateSlideshow(JSoN.backgroundColors,JSoN.pictureCaptions,JSoN.slideDelay,JSoN.pictures,JSoN.links,JSoN.picWidth,JSoN.picHeight);
        let response = {
            response:"Slideshow Entered successfully"
        }
        console.log("AutoSlideshow method finished");
        return NextResponse.json(response);
    } else if(JSoN.type === "enterOpenData") {
        console.log("Open Data method about to start");
        await generateOpenData(JSoN.vpcStatement,JSoN.openDataParagraph,JSoN.openDataPic);
        let response = {
            response:"Open Data Entered successfully"
        }
        console.log("Open Data method finished");
        return NextResponse.json(response);
    } else {
        let response = {
            response:"Slideshow Entered unsuccessfully"
        }
        return JSON.stringify(response);
    }

}
