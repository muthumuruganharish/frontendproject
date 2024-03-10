// when clicking plus button i want to change popupbox and popupoverlay display "block"
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("addpopup")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var addbook=document.getElementById("add-book")
var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div= document.createElement("div")
    div.setAttribute("class","bookcontainer")
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button class="buttonclose" onclick="deletebook(event)">close</button>`
    container.append(div)

})

function deletebook(event){
    event.target.parentElement.remove()
}

