let dark =document.querySelector('.dark')
let night =document.querySelector('.night')
let light =document.querySelector('.light')
let sidebar =document.querySelector('.sidebar')
let activeListItem = document.querySelector('.list-item.active')

dark.addEventListener('click',()=>{
    sidebar.className="sidebar";
    activeListItem='list-item active'
})
night.addEventListener('click',()=>{
    sidebar.className="sidebar night";
    activeListItem='list-item active night'
})
light.addEventListener('click',()=>{
    sidebar.className="sidebar light";
    activeListItem='list-item active light'
})
