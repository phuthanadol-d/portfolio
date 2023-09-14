var LastscrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll",function()
{
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > LastscrollTop)
    {
        navbar.style.top="-72px";
        
    }   
    else
    {
        navbar.style.top="0px";
        if(scrollTop == 0)
        {
        } 
    }
    LastscrollTop = scrollTop;
})

navside = document.getElementById("navside")
function openNav()
{
    navside.style.visibility = 'visible';
    navside.style.opacity = "1";
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeNav()
{ 
    navside.style.visibility = 'hidden';
    navside.style.opacity = "0";
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
}

window.addEventListener('mouseup', function(event){
   var outnavside = navside.contains(event.target);
	if (!outnavside){
        closeNav();
    }
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}