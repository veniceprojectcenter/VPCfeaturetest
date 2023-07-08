export async function uploadFile(file:File):Promise<string> {
    console.log(`uploading file ${file.name}`);
    let url = process.env.NEXT_PUBLIC_FILE_API_URL;
    console.log(url)
    if(url != undefined) {
        const awsResponce = await fetch(url+"/file/add",{
            method:"POST",
            body: JSON.stringify({
                filename:file.name
            })
        })
        try {
            let awsBody = await awsResponce.json()
            console.log(awsBody.uploadUrl)
        } catch (error) {
            console.log("error");
            return "failed to upload"
        }
    }
    return "";
}