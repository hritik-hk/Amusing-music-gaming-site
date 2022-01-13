const music=new Audio("./sounds/intro-sound.mp3");
  
$(".btn").click(function(){
    $(".btn").css("display","none");
    music.play();
    $(".hello").css("display","block");
    $(".hello").fadeOut(3000);
    setTimeout(getReady,3000);
})

function getReady(){
   $(".ready").css("display","block");
   $(".ready").fadeOut(2000);
   setTimeout(main,2000);
}

function main(){
    $(".content").css("display","block");
    $(".comming-soon").addClass("hide");

    setTimeout(function(){
        $(".site-name").text("amusing. . .")
    },2000);
  
    setTimeout(function(){
        $(".comming-soon").removeClass("hide");
       
    },2500);
}

