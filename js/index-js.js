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
