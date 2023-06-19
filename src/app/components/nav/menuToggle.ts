export const menuToggle = () => {
    const sideBar = document.querySelector(".sidebar");
    if(sideBar != null) {
        if(sideBar.toggleAttribute("opensidebar")) {
            const sidebarList = document.querySelector(".sidebar.sidebar-content.lists");
            if(sidebarList != null) {
                const sidebarElements = sidebarList.children;
            } else {
                console.log("sidebarList is null");
            }

        }
        sideBar.classList.toggle("opensidebar");
    }
    console.log(sideBar);
}