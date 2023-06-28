import {prisma} from "@/app/api/db";

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