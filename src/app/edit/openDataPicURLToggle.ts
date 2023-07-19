export const openDataPicURLToggle = () => {
    const urlBox = document.querySelector(".opendata.lefttt.editOpenDataPic.openDataPicURL");
    if(urlBox != null) {
        console.log("URLBox is not null");
        if(urlBox.toggleAttribute("editOpenDataPicURL")) {

        }
        urlBox.classList.toggle("editOpenDataPicURL");
    } else {
        console.log("URLBox is null");
    }
    console.log(urlBox);
}