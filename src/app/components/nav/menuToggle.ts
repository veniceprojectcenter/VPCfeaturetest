export const menuToggle = () => {
    const sideBar = document.querySelector(".sidebar");
    if(sideBar != null) {
        sideBar.classList.toggle("opensidebar");

    }
    console.log(sideBar);
}