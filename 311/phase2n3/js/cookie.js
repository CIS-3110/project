function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function changeCSS(x) {
  $("#" + x).val("Favorited!");
  $("#" + x).css("background-color", "yellow");
  $("#" + x).css("color", "black");

}

function revertCSS(x) {
  $("#" + x).css("background-color","");
  $("#" + x).val("Make Favorite");
  $("#" + x).css("color", "black");

}

function checkCookie(x) {
    var user=getCookie("image" + x);
    //console.log("image" + x);
    if (user != "") {
        //alert("Welcome again " + user);
        //$("#" + x).css("background-color","black");
        //changeCSS(x);
        //revertCSS(x);

        console.log("image" + x);
    } else {
       /*user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }*/
       setCookie("image" + x, String(x), 30)
       changeCSS(x);
       console.log("cookie");
    }
}

function checkMyCookie(x) {
  var user = getCookie("image" + x);
  if (user != "") {
    changeCSS(x);
  }
}

$(document).ready(changeHTML());

function changeHTML() {
  for (var i = 0; i < 6 ; i++) {
    checkMyCookie(i);
  }
}

/*$(function() {
  for (var i = 0; i < 10; i++) {
    checkCookie(i);
  }
})*/

$("#0").click(function() {
  checkCookie(0);
  //setCookie("image0", "0", 30);
  //hangeCSS(0);
})

$("#1").click(function() {
  checkCookie("1");
})

$("#2").click(function() {
  checkCookie("2");
})

$("#3").click(function() {
  checkCookie("3");
})

$("#4").click(function() {
  checkCookie("4");
})

$("#5").click(function() {
  checkCookie("5");
})

$("#unfav0").click(function() {
  setCookie("image0", "", 0);
  revertCSS("0");
})

$("#unfav1").click(function() {
  setCookie("image1", "", 0);
  revertCSS("1");
})

$("#unfav2").click(function() {
  setCookie("image2", "", 0);
  revertCSS("2");
})

$("#unfav3").click(function() {
  setCookie("image3", "", 0);
  revertCSS("3");
})

$("#unfav4").click(function() {
  setCookie("image4", "", 0);
  revertCSS("4");
})

$("#unfav5").click(function() {
  setCookie("image5", "", 0);
  revertCSS("5");
})
