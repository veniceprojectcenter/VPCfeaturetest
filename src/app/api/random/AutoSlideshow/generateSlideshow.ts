import {prisma} from "@/app/api/db";

export async function generateSlideshow(backgroundColors:string[],pictureCaptions:string[],slideDelay:number,pictures:string[],links:string[],picWidth:number,picHeight:number) {
    console.log("prisma connection established");
    try {
        console.log("Before tweet creation");
        await prisma.autoSlideshow.create({
            data: {
                backgroundColors:backgroundColors,
                pictureCaptions:pictureCaptions,
                slideDelay:slideDelay,
                pictures:pictures,
                links:links,
                picWidth:picWidth,
                picHeight:picHeight
            }
        });
        console.log("After autoslideshow creation");
    } catch(error) {
        console.log("Database error");
        throw error;
    }

}