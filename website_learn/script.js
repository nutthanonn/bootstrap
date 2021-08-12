const dropdownContent = ()=>{
    document.getElementById('dropdown-content').classList.toggle('show')
}



const btn = document.getElementById('dropdown')
btn.addEventListener('click', dropdownContent)
