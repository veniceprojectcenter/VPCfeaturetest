import {prisma} from "@/app/api/db";

export async function generateSlideshow(backgroundColors:string[],pictureCaptions:string[],slideDelay:number,pictures:string[],links:string[],picWidth:number,picHeight:number) {
    console.log("prisma connection established");
    try {
        console.log("Before tweet creation");
        await prisma.autoSlideshow.create({
            data: {
                backgroundColors: {
                    create: backgroundColors.map((color) => {
                        return {
                            color:color
                        }
                    })
                },
                pictureCaptions:{
                    create: pictureCaptions.map((pictureCaptions) =>{
                        return {
                            caption:pictureCaptions
                        }
                    })
                },
                slideDelay:slideDelay,
                pictures: {
                    create: pictures.map((pictures) => {
                        return {
                            url:pictures
                        }
                    })
                },
                links:{
                    create: links.map((link) => {
                        return {
                            url:link
                        }
                    })
                },
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