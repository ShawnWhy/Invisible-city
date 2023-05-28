function randomColor(){

    var color;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
    return color

}

const DarkColors = [
"#23214f",'#2b0a16','#0e3314','#344026','#1e032e',
'#041b29','#1a0078','#17010a'
]
const GreenColors = [
"#23214f",'#2b0a16','#0e3314','#344026','#1e032e',
'#041b29','#1a0078','#17010a'
]
function randomDarkColor(){
var randNumber = Math.floor(Math.random()*(DarkColors.length-1))
    return DarkColors[randNumber]

}

function createGarage(houseColor, roofColor){
    var garage= $("<div>");
    var door = $("<div>");
    var roof = $("<div>");
    garage.addClass("garage1")

    door.addClass("garageDoor");
    roof.addClass("roof");


}

function createChimeny(houseColor, roofColor){

}

function createFence(){

}

function createShrub(){

}

function createHouse2(color){
console.log("createhourse2");
var lot = $("<div>");
lot.addClass("lot2");
var house1 = $("<div>");
house1.addClass("house1")
var randWidth = Math.floor(Math.random()*30+50)
var randHeight = Math.floor(Math.random()*100+80)

var roof1 = $("<div>");
roof1.addClass("roof1");
var chosenColor = randomDarkColor();
var windowColor = "#efff87";
var windowBorderColor = randomColor();
var roofColor = randomColor();
house1.css("background-color", chosenColor);
house1.css("width",randWidth + "%")
house1.css("height", randHeight + "%")
house1.css("top", (100-randHeight) + "%")

roof1.css("background-color", chosenColor);
roof1.css("border-color", roofColor);
roof1.css("width",Math.sqrt(5000) + "%")
roof1.css("padding-bottom",Math.sqrt(5000) + "%")

house1.append(roof1);
var randWindowNumber = Math.floor(Math.random()*6+2)


for(i=0; i<randWindowNumber; i++){
    var window = $("<div>");
    window.addClass("window2");
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
        left = 5*(i+1) + 20*(i)


    }
    else{
        top=20
       left = 5*(i-Math.floor(randWindowNumber/2)+1) + 20*(i-randWindowNumber/2)


    }
    window.css("top", top + "%")
    window.css("left", left + "%");
    house1.append(window);


}

lot.append(house1);
$(".right").append(lot)
}





function createHouse1(color){
console.log("createhourse");
var lot = $("<div>");
lot.addClass("lot");
var house1 = $("<div>");
house1.addClass("house1")
var randWidth = Math.floor(Math.random()*30+50)
var randHeight = Math.floor(Math.random()*100+80)

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
roof1.css("width",Math.sqrt(5000) + "%")
roof1.css("padding-bottom",Math.sqrt(5000) + "%")

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
        left = 5*(i+1) + 20*(i)


    }
    else{
        top=20
       left = 5*(i-Math.floor(randWindowNumber/2)+1) + 20*(i-randWindowNumber/2)


    }
    window.css("top", top + "%")
    window.css("left", left + "%");
    house1.append(window);


}

lot.append(house1);
$(".left").append(lot)
}

function deleteHouse(){
var Lots = $(".lot")
if(Lots&&Lots.length>10){
 Lots[0].remove();
    
}
var Lots2 = $(".lot2")
if(Lots2&&Lots2.length>10){
    console.log(Lots2)
 Lots2[0].remove();

}
}

$("body").keypress(event=>{
    event.stopPropagation();
    event.preventDefault();
    var pianoKey=event.key
    console.log(pianoKey)
    if(pianoKey=='w'){
        
        createHouse1();
        createHouse2();
        deleteHouse();


    }
  

})

$(document).on("click",".lot",(e)=>{
e.preventDefault();
e.stopPropagation();
var flop= e.target;
console.log(flop)
if($(flop).hasClass("house1")){
    console.log($(flop).parent())
$(flop).parent().addClass("houseFlop2")};

})
$(document).on("click",".lot2",(e)=>{
e.preventDefault();
e.stopPropagation();
var flop= e.target;
console.log(flop)
if($(flop).hasClass("house1")){
    console.log($(flop).parent())
$(flop).parent().addClass("houseFlop")};

})
// 

    // var color;
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var j = 0; j < 6; j++) {
    // color += letters[Math.floor(Math.random() * 16)];}
 


