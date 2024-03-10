

search.addEventListener("keyup",function(){
    var productcontainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

    var enteredvalue=event.target.value.toUpperCase()

    for( i=0;i<enteredvalue.length;i++)
    {
        var productname=productlist[i].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"   
        }
    }
})