export async function uploadFile(file:File):Promise<string> {
    console.log(`uploading file ${file.name}`);
    let url = process.env.NEXT_PUBLIC_FILE_API_URL;
    console.log(url)
    if(file.name != undefined) {
        //TODO upload file on donload results in an undefined file
        if (url != undefined) {
            console.log(file.type);
            const awsResponce = await fetch(url + "/add", {
                method: "POST",
                body: JSON.stringify({
                    filename: file.name.replaceAll(" ","-")
                })
            })
            try {
                let awsBody = await awsResponce.json()
                let uploadUrl = awsBody.uploadUrl;
                if (uploadUrl != undefined) {
                    let responce = await fetch(uploadUrl, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        body: file
                    })
                    console.log(awsBody.getUrl);
                    return awsBody.getUrl;
                }
            } catch (error) {
                console.log("error");
                return "failed to upload"
            }
        }
    }
    return "";
}