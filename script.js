





setInterval(() => {
    var randNews = Math.floor(Math.random()*capturedResponse.articles.length)
    let updown = Math.floor(Math.random()*4+1)
    var randheight = Math.floor(Math.random()*200-100)
    var color;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
    
    var stripe1 = $("<div>")
    stripe1.addClass("stripe1");
    stripe1.css("background-color",color)
    stripe1.css("top",randheight+"%")
    stripe1.attr("number",randNews)
    stripe1.html(capturedResponse.articles[randNews].title)

  
    switch(updown){
        case 1 :$('.left').append(stripe1)
        break;
        case 2 :$('.right').append(stripe1)
        // break;
        // case 3 :$('.left2').append(stripe1)
        // break;
        // case 4 :$('.right2').append(stripe1)
        
    }
  }, 500);


  setInterval(() => {
    var randNews = Math.floor(Math.random()*capturedResponse.articles.length)

    let updown = Math.floor(Math.random()*4+1)
    var randheight = Math.floor(Math.random()*200-100)
     color;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
    
    var stripe1 = $("<div>")
    stripe1.addClass("stripe2");
    stripe1.css("background-color",color)
    stripe1.css("left",randheight+"%")
    stripe1.attr("number",randNews)
    stripe1.html(capturedResponse.articles[randNews].title)

  
    switch(updown){
        case 1 :$('.top').append(stripe1)
        break;
        case 2 :$('.bottom').append(stripe1)
        break;
        case 3 :$('.bottom2').append(stripe1)
        // break;
        // case 4 :$('.bottom').append(stripe1)
        
    }
  }, 500);

  setInterval(() => {
    var randNews = Math.floor(Math.random()*capturedResponse.articles.length)

    let updown = Math.floor(Math.random()*4+1)
    var randheight = Math.floor(Math.random()*250-150)
     color;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
    
    var stripe3 = $("<img>")
    stripe3.addClass("stripe3");
    stripe3.css("background-color",color)
    stripe3.css("top",randheight+"%")
    stripe3.attr("number",randNews)
    stripe3.attr("src", capturedResponse.articles[randNews].image)

  
    switch(updown){
        case 1 :$('.right').append(stripe3)
        break;
        case 2 :$('.left').append(stripe3)
        // break;
        // case 3 :$('.left2').append(stripe3)
        // break;
        // case 4 :$('.right2').append(stripe3)
        
    }
  }, 800);

  setInterval(() => {
     var stripes1= $(".stripe1");
     for(i=0; i<stripes1.length;i++){
         if($(stripes1[i]).css("visibility")=="hidden"){
             $(stripes1[i]).remove();
         }
     }
      
  }, 200);

  setInterval(() => {
    var stripes2= $(".stripe2");
    for(i=0; i<stripes2.length;i++){
        if($(stripes2[i]).css("visibility")=="hidden"){
            $(stripes2[i]).remove();
        }
    }
     
 }, 200);
 setInterval(() => {
    var stripes3= $(".stripe3");
    for(i=0; i<stripes3.length;i++){
        if($(stripes3[i]).css("visibility")=="hidden"){
            $(stripes3[i]).remove();
        }
    }
     
 }, 200);



    // var color;
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var j = 0; j < 6; j++) {
    // color += letters[Math.floor(Math.random() * 16)];}
 


$(document).click(event=>{
    console.log($(event.target))
})

$(document).on("click",".screen",event=>{
    $(".screen").removeClass("open")
    $(".screen").addClass("invisibleP");
    $(".newsTitle").removeClass("newsTitleOpen")
    $(".newsTitle").addClass("invisibleP");
    $(".newsText").addClass("invisibleP");
    $(".newsText").removeClass("newsTextOpen");
    $(".newsImage").addClass("invisibleP");
    $(".newsImage").removeClass("newsImageOpen");
    $(".newsLink").addClass("invisibleP");
    $(".newsLink").removeClass("newsLinkOpen");

})