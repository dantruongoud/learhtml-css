
function collapseMenu() {
    const sidebar = document.querySelector('#sidebar')
    sidebar.classList.toggle('is_less')
}
const iconMenu = document.querySelector('.nav-header>a')
iconMenu.addEventListener('click', collapseMenu)

const btnMenus = document.querySelectorAll('.nav-main li a')
const btnsubmenu = document.querySelectorAll('.subSidebar li a')
// const showSubmenu = document.querySelector('.subSidebar')
function showSubSidebar(event) {
    const element = event.currentTarget.parentElement.querySelector(".subSidebar")
    if (element)
        element.parentElement.classList.toggle('is_active')
}

function showSubSidebar2(event) {
    const element = event.currentTarget.parentElement.querySelector(".sub-okrs")
    if (element)
        element.parentElement.classList.toggle('is_active')
    // element.classList.toggle('is_active')
}
for (const subMenubtn of btnMenus) {
    subMenubtn.addEventListener('click', showSubSidebar)
}
for (const sub of btnsubmenu) {
    sub.addEventListener('click', showSubSidebar2)
}
// const arrow = document.querySelectorAll('.item-menu');
// arrow.addEventListener('click', () => {
//     arrow.classList.toggle('rotate');
// });
