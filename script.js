function randomColor(){

    var color;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
    return color

}

function createHouse1(color){
console.log("createhourse");
var lot = $("<div>");
lot.addClass("lot");
var house1 = $("<div>");
house1.addClass("house1")
var randWidth = Math.floor(Math.random()*60+20)
var randHeight = Math.floor(Math.random()*60+20)

var roof1 = $("<div>");
roof1.addClass("roof1");
var chosenColor = randomColor();
var windowColor = "black";
var windowBorderColor = randomColor();
var roofColor = randomColor();
house1.css("background-color", chosenColor);
house1.css("width",randWidth + "%")
house1.css("height", randHeight + "%")
house1.css("top", (100-randHeight) + "%")

roof1.css("background-color", chosenColor);
roof1.css("border-color", roofColor);
roof1.css("width",Math.sqrt(randWidth^2*2) + "%")
house1.append(roof1);
var randWindowNumber = Math.floor(Math.random()*6+2)


for(i=0; i<randWindowNumber; i++){
    var window = $("<div>");
    window.addClass("window");
    window.css("background-color", windowColor);
    window.css("border-color",windowBorderColor)
    var windowBar = $("<div>");
    
    windowBar.addClass("windowBarHori")
    windowBar.css("background-color",windowBorderColor)
    window.append(windowBar)
    if(randWidth>60){
    var windowBarVert = $("<div>");
    
    windowBarVert.addClass("windowBarVert")
    windowBarVert.css("background-color", windowBorderColor)
    window.append(windowBarVert)

    }
    var top
    var left
    if(i<randWindowNumber/2){
        top=60;
        left = 34.5*i + 20*i


    }
    else{
        top=20
       left = 34.5*(i-randWindowNumber/2) + 20*(i-randWindowNumber/2)


    }
    window.css("top", top + "%")
    window.css("left", left + "%");
    house1.append(window);


}

lot.append(house1);
$("body").append(lot)
}

$("body").keypress(event=>{
    event.stopPropagation();
    event.preventDefault();
    var pianoKey=event.key
    console.log(pianoKey)
    if(pianoKey=='w'){
        
        createHouse1();

    }
  

})


// 

    // var color;
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var j = 0; j < 6; j++) {
    // color += letters[Math.floor(Math.random() * 16)];}
 


