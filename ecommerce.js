
var sidenavbar=document.querySelector(".sidenavbar")

function dis(){
    sidenavbar.style.display="block"
}
function xmark(event){
    event.preventDefault()
    sidenavbar.style.left="-60%"
    
}

