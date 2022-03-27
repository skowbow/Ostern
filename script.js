function Margin() {
  document.getElementById("Spieler1").style.marginLeft = "30px";
}


function setmargin(){
  document.getElementById("Spieler1").style.marginLeft = "120px";
  document.getElementById("Spieler2").style.marginLeft = "120px";
  document.getElementById("Spieler3").style.marginLeft = "120px";
  document.getElementById("Spieler4").style.marginLeft = "120px";
  document.getElementById("Spieler5").style.marginLeft = "120px";
  document.getElementById("Spieler6").style.marginLeft = "120px";
  document.getElementById("Spieler7").style.marginLeft = "120px";
  document.getElementById("Spieler8").style.marginLeft = "120px";
  document.getElementById("Spieler9").style.marginLeft = "120px";
  document.getElementById("Spieler10").style.marginLeft = "120px";
}

function baum() {
    $("#Spieler1").stop().css("marginLeft", "120").animate({
      marginLeft: "30"
        },30000 
    );

   $("#Spieler2").stop().css("marginLeft", "120").animate({
      marginLeft: "280"
        },30000 
    );
     $("#Spieler3").stop().css("marginLeft", "120").animate({
      marginLeft: "370"
        },30000 
                                                            
    );
     $("#Spieler4").stop().css("marginLeft", "120").animate({
      marginLeft: "90"
        },30000 
    );
     $("#Spieler5").stop().css("marginLeft", "120").animate({
      marginLeft: "210"
        },30000 
    );
     $("#Spieler6").stop().css("marginLeft", "120").animate({
      marginLeft: "120"
        },30000 
    );
     $("#Spieler7").stop().css("marginLeft", "120").animate({
      marginLeft: "240"
        },30000 
    );
     $("#Spieler8").stop().css("marginLeft", "120").animate({
      marginLeft: "600"
        },30000
    );
     $("#Spieler9").stop().css("marginLeft", "120").animate({
      marginLeft: "30"
        },30000 
    );
     $("#Spieler10").stop().css("marginLeft", "120").animate({
      marginLeft: "90"
        },30000 
    );

  };
