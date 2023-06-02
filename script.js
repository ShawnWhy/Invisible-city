var oldWorld = "on";
var gateTriger = "off"
var newWorld="off"
var gateNumber = 0;

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
"#66ed59",'#6bb012','#0db34f','#0db34f','#0db34f',
'#0db34f','#0db34f','#0db34f'
]
function randomDarkColor(){
var randNumber = Math.floor(Math.random()*(DarkColors.length-1))
    return DarkColors[randNumber]

}






function generateFunland(){
    console.log("fun land")
    for(let i=0; i<100; i++){
        setTimeout(() => {
        let line = $("<div>");
        line.addClass("floorLine");
        let randColor = randomColor();
        line.css("background-color", randColor);
        let line2 = $("<div>");
        line2.addClass("floorLine");
        let randColor2 = randomColor();
        line2.css("background-color", randColor2);
        $(".ground").append(line2)
        $(".bottom").append(line)
        }, 20*i);
    }

    var moon = $(".moon");
    let initialInner = $("<div>");
    initialInner.addClass("inner3")
    for (i = 0; i < 10; i++) {
        initialInner = addToOuterMoon(initialInner)

    }

    moon.append(initialInner);

}
function randomGreenColor(){
var randNumber = Math.floor(Math.random()*(GreenColors.length-1))
    return GreenColors[randNumber]

}

function rotateMoon(){
var moon = $(".moon")
var moonRotation = getRotationDegrees(moon);
// console.log(moonRotation);
    moonRotation = parseInt(moonRotation)+5;
    if(moonRotation>360){
        moonRotation=moonRotation-360;
    }
    // console.log(moonRotation);
    moon.css("transform", "rotate(" + moonRotation +"deg)translateY(700%)")

}

function getRotationDegrees(obj) {
    // console.log(obj)
    var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform") ||
        obj.css("-ms-transform") ||
        obj.css("-o-transform") ||
        obj.css("transform");
    if (matrix !== 'none') {
        // console.log("getting degree")
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else { var angle = 0; }
    // console.log(angle);
    return (angle < 0) ? angle + 360 : angle;
}

function addStars(location, number) {
    for (i = 0; i < number; i++) {
        var star = $("<div>");
        star.addClass('star');
        var XLen = Math.floor(Math.random() * 100);
        var YLen = Math.floor(Math.random() * 70)
        star.css('left', XLen + '%')
        star.css('top', YLen + '%')
        $(location).append(star);
    }
}

addStars(".sky", 145)

function createMagicGate(){
    console.log("create magic gate");
    // var lot = $("<div>")
    // lot.addClass("lot")
    var emptyLot = $("<div>")
    emptyLot.addClass("lot")
    var gateBody = $("<div>");
    gateBody.addClass("gateBody");
    gateBody.attr("style", "transform:translateX(0%)translateZ(0px)")
    var doorBehind= $("<div>");
    doorBehind.addClass("doorBehind");
    var doorForward = $("<div>");
    doorForward.addClass("doorForward");
    gateBody.append(doorBehind);
    gateBody.append(doorForward);
    $(".vista").append(gateBody);
    // $(".left").append(lot);
    addStars('.doorBehind', 20)
    // $(".left2").append(emptyLot);
    // $(".right").append(emptyLot);

}

function createGarage(houseColor, roofColor){
    var garage= $("<div>");
    var door = $("<div>");
    var roof = $("<div>");
    garage.addClass("garage1")
    door.addClass("garageDoor");
    roof.addClass("roof1");
    garage.css("background-color", houseColor)
    door.css("background-color", roofColor)
    roof.css("background-color", houseColor)
    roof.css("border-color", roofColor)
    if (newWorld == "on") {
        garage.addClass("garageDark")
        garage.css("border-color", roofColor)
        door.addClass("garageDoorDark");
        door.css("border-color", roofColor)
        roof.addClass("roofDark");
        roof.css("border-color", roofColor)
        door.css("background-color", houseColor)
    }

    roof.css("width",Math.sqrt(5000) + "%")
    roof.css("padding-bottom",Math.sqrt(5000) + "%")
    garage.append(roof);
    garage.append(door);
    return(garage);
}

function createChimeny(houseColor, roofColor){

    var chimeny = $("<div>");
    chimeny.addClass("chimeny")
    if(newWorld=="on"){
        chimeny.addClass("chimenyDark")
        chimeny.css("border-color", roofColor)

    }
    chimeny.css("background-color", houseColor);
    chimeny.css("border-color", roofColor)
    var randomChimenyChoose = Math.floor(Math.random()*(10+1))
    if(randomChimenyChoose%2>0){
        chimeny.css("left","65%")
    }
    return chimeny
}

function createFence(){
    var fence = $("<div>");
    fence.addClass("fence");
    var horizontal = $("<div>");
    horizontal.addClass("horiFence");
    if(newWorld=="on"){
        horizontal.addClass("fenceDark")
        let randcolor = randomColor()
        horizontal.css("border-color", randcolor)
    }
    for(i=0; i<5;i++ ){
        var vert = $("<div>");
        if(i==0){
            vert.css('margin-left', '0px')
        }
        vert.addClass("vertiFence");
        if (newWorld == "on") {
            let randcolor = randomColor()
            vert.addClass("fenceDark");
            vert.css("border-color",randcolor)

        }
        fence.append(vert);
    }
    fence.append(horizontal);
    return(fence);

}

function createShrub(){
var shrub = $("<div>");
shrub.addClass("shrub");
shrubColor = randomGreenColor();
shrub.css("background-color", shrubColor);
if(newWorld=="on"){
    shrub.css("background-color", randomColor());

}
var randomLeft = Math.random()*80;
shrub.css("left", randomLeft);
return(shrub);

}

function createHouse2(color){
// console.log("createhourse2");
var lot = $("<div>");
lot.addClass("lot2");
var house1 = $("<div>");
house1.addClass("house1")
var randWidth = Math.floor(Math.random()*30+40)
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
// console.log("createhourse");
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
var randomNumberExtra = Math.floor(Math.random()*(10+1))

if(randWidth<60){
var garage = createGarage(chosenColor, roofColor);
house1.append(garage);
}

if(randomNumberExtra%2>0){
var chimeny = createChimeny(chosenColor, roofColor);
house1.append(chimeny)
};
if (randomNumberExtra > 5) {
 var fence = createFence()
 lot.append(fence)

};
if (randomNumberExtra > 7) {
    var shrub = createShrub()
    lot.append(shrub)

};



lot.append(house1);

var emptyLot = $("<div>")
emptyLot.addClass("lot");
if (randomNumberExtra == 7&&oldWorld=="on") {
        key = createKey()
        emptyLot.append(key);

}
$(".left2").append(emptyLot);
$(".left").append(lot)
}


function createHouse3(color) {
    console.log("createhourse3");
    var lot = $("<div>");
    lot.addClass("lot");
    var house1 = $("<div>");
    house1.addClass("houseDark")
    var randWidth = Math.floor(Math.random() * 30 + 50)
    var randHeight = Math.floor(Math.random() * 100 + 80)

    var roof1 = $("<div>");
    roof1.addClass("roof1");

    roof1.addClass("roofDark");
    var chosenColor = "black";
    var windowColor = "black";
    var windowBorderColor = randomColor();
    var roofColor = windowBorderColor;
    house1.css("background-color", chosenColor);
    house1.css("width", randWidth + "%")
    house1.css("height", randHeight + "%")
    house1.css("top", (100 - randHeight) + "%")
    house1.css("border-color",windowBorderColor)

    roof1.css("background-color", chosenColor);
    roof1.css("border-color", roofColor);
    roof1.css("width", Math.sqrt(5000) + "%")
    roof1.css("padding-bottom", Math.sqrt(5000) + "%")

    house1.append(roof1);
    var randWindowNumber = Math.floor(Math.random() * 6 + 2)


    for (i = 0; i < randWindowNumber; i++) {
        var window = $("<div>");
        window.addClass("window");
        window.css("background-color", windowColor);
        window.css("border-color", randomColor())
        var windowBar = $("<div>");

        windowBar.addClass("windowBarHori")
        windowBar.css("background-color", randomColor())
        window.append(windowBar)
        if (randWidth > 60) {
            var windowBarVert = $("<div>");

            windowBarVert.addClass("windowBarVert")
            windowBarVert.css("background-color", randomColor)
            window.append(windowBarVert)

        }
        var top
        var left
        if (i < randWindowNumber / 2) {
            top = 60;
            left = 5 * (i + 1) + 20 * (i)


        }
        else {
            top = 20
            left = 5 * (i - Math.floor(randWindowNumber / 2) + 1) + 20 * (i - randWindowNumber / 2)


        }
        window.css("top", top + "%")
        window.css("left", left + "%");
        house1.append(window);


    }
    var randomNumberExtra = Math.floor(Math.random() * (10 + 1))

    if (randWidth < 60) {
        var garage = createGarage(chosenColor, roofColor);
        house1.append(garage);
    }

    if (randomNumberExtra % 2 > 0) {
        var chimeny = createChimeny(chosenColor, roofColor);
        house1.append(chimeny)
    };
    if (randomNumberExtra > 5) {
        var fence = createFence()
        lot.append(fence)

    };
    if (randomNumberExtra > 7) {
        var shrub = createShrub()
        lot.append(shrub)

    };



    lot.append(house1);

    var emptyLot = $("<div>")
    emptyLot.addClass("lot");
    // if (randomNumberExtra == 7) {
    //     key = createKey()
    //     emptyLot.append(key);

    // }
    $(".left2").append(emptyLot);
    $(".left").append(lot)
}

function deleteHouse(){
var Lots = $(".left .lot")
if(Lots&&Lots.length>10){
 Lots[0].remove();
    
}
var Lots2 = $(".lot2")
if(Lots2&&Lots2.length>10){
    // console.log(Lots2)
 Lots2[0].remove();

}
var emptyLots = $(".left2 .lot")
    if (emptyLots && emptyLots.length>10){
        // console.log(emptyLots)
        emptyLots[0].remove();

}
}

function movePath(){
    let line = $("<div>");
    line.addClass("floorLine");
    let randColor = randomColor();
    line.css("background-color", randColor);
    $(".bottom").append(line)
    var lines = $(".bottom").children();

    console.log(lines)
    if(lines.length>100){
        console.log("removeline")
        lines[0].remove();
    }

}
//create portal key

function addToOuter(inner){
    var random = Math.floor(Math.random()*10)
    let outer = $("<div>");
    if(random%2>0){
    outer.addClass("inner");
    }
    else{
    outer.addClass("inner2");

    }
    var randcolor = randomColor()
    outer.css("background-color",randcolor);

    $(outer).append(inner)

    return(outer)
}

function addToOuterMoon(inner) {

    let outer = $("<div>");
   
  
        outer.addClass("inner3");
 
 

    var randcolor = randomColor()
    outer.css("background-color", randcolor);

    $(outer).append(inner)

    return (outer)
}

function createKey(){
var portal = $("<div>");
let initialInner = $("<div>");
initialInner.addClass("inner")
portal.addClass("portal");

for(i=0;i<10; i++){
    initialInner = addToOuter(initialInner)

}

portal.append(initialInner);
return portal

}

function AnotherWorldTrigger(){

    $('.left').html("")
    $('.left2').html("")
    $(".right").html("")
    $(".gateBody").remove()
    $(".bottom").css("background-color","black");
    $(".ground").css("background-color","black");
    $(".moon").css("background-color","black");
    $(".moon").css("transform","rotate(90deg)translateY(700%)")


}

function gateAnimation1(){
    

    var transform = $(".gateBody").attr("style")
    // console.log(transform);
    transform=transform.split("transform:translateX(");
    transform= transform[1];
    transform= transform.split(")translateZ(")
    // console.log(transform);
    var transformX = transform[0].split("%")
    var transformZ = transform[1].split("px")
    // console.log(transformX)
    // console.log(transformZ)
    transformX = transformX[0]
    transformZ = transformZ[0]
    newX = parseInt(transformX) + 3
    newZ = parseInt(transformZ) + 100
    $(".gateBody").attr("style", "transform:translateX("+newX+"%)translateZ("+newZ+"px)")
    


}

$("body").keypress(event=>{
    event.stopPropagation();
    event.preventDefault();
    var pianoKey=event.key
    // console.log(pianoKey)
    if(pianoKey=='w'){
        if(oldWorld=="on"){
        createHouse1();
        createHouse2();
        deleteHouse();
        }
        else if(newWorld=="on"){
            console.log("new world on")
            createHouse3();
            createHouse2();
            deleteHouse();
            movePath()
        
        }
        rotateMoon();

        

        if(gateTriger=="on"){
            gateNumber+=1
            if(gateNumber>=5){
                gateTriger="off";
                oldWorld="off";
                setTimeout(() => {
                    newWorld="on"
                }, 1000);
                AnotherWorldTrigger();
                generateFunland()
            }

            gateAnimation1();
        }


    }
  

})


// $('.left').on('mouseleave', (e) => {
//     if ($(e.target).hasClass('left')) {
//         $(e.target).css("pointer-events", "unset")

//     }
// })

$('.left').on('mouseover',(e)=>{
    if($(e.target).hasClass('left')){
        $(e.target).css("pointer-events", "none")
   
    setTimeout(() => {
        $(e.target).css("pointer-events", "unset")

    }, 500);
    }
})






$(document).on("click",".lot",(e)=>{
e.preventDefault();
e.stopPropagation();
var flop= e.target;
// console.log(flop)
if($(flop).hasClass("house1")){
    // console.log($(flop).parent())
$(flop).parent().addClass("houseFlop2")};

})
$(document).on("click",".lot2",(e)=>{
e.preventDefault();
e.stopPropagation();
var flop= e.target;
// console.log(flop)
if($(flop).hasClass("house1")){
    // console.log($(flop).parent())
$(flop).parent().addClass("houseFlop")};

})
$(document).on("click", ".portal", (e) => {
    console.log("click portal")
    e.preventDefault();
    e.stopPropagation();
   
   if(gateTriger=="off"){
   createMagicGate();
   gateTriger = "on"
   }
    // deleteHouse();
    // rotateMoon();

})
// 

    // var color;
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var j = 0; j < 6; j++) {
    // color += letters[Math.floor(Math.random() * 16)];}
 


