function OnClick(buttonNum)
{
    var targetDOM = document.getElementById("iframeId")
    
    //console.log(buttonNum+"button Clicked!");
    if(buttonNum==0)
    {
        targetDOM.src="html/music/music1.html";
    }
    else if(buttonNum==1)
    {
        targetDOM.src="music1.html";
    }
    else if(buttonNum==2)
    {
        targetDOM.src="music2.html";
    }
    else if(buttonNum==3)
    {
        targetDOM.src="music3.html";
    }
    else if(buttonNum==4)
    {
        targetDOM.src="music4.html";
    }
    else if(buttonNum==5)
    {
        targetDOM.src="movie1.html";
    }
    else if(buttonNum==6)
    {
        targetDOM.src="movie2.html";
    }
    else if(buttonNum==7)
    {
        targetDOM.src="movie3.html";
    }
    else if(buttonNum==8)
    {
        targetDOM.src="movie4.html";
    }
    
}

function OnMouseOver(DOM)
{
    //console.log("I'm In!");
    DOM.style.fontSize = "24px";
    DOM.style.fontWeight = "bold";
    DOM.style.backgroundSize="80%";

}

function OnMouseOut(DOM)
{
    //console.log("I'm Out!");
    DOM.style.fontSize = "17px";
    DOM.style.fontWeight = "normal";
    DOM.style.backgroundSize ="60%";
    
}
