var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; //your urls
var caption = ['Nissan','Rolls-Royce','Porsche','Aston Martin','Pagani','Dodge'];
var description = [
  'GTR Black Edition',
  'Phantom',
  'GT3-RS',
  'DB9',
  'Zonda',
  'Demon',
];
 console.log(images);
 var url ; //assign later, make scope global to script
 for(var i=0; i < images.length; i++) //establish for, 6 items, last index place is 5, if you recall
 {
   console.log("image in iteration is " + images[i]);
   console.log(caption[i]);
   console.log(description[i]);
   url = "https://s3-us-west-2.amazonaws.com/cis3110p1/phase2n3/" + images[i]; //append to https://s3-us-west-2.amazonaws.com/newbucket3110fall18/phase2/
   //cpt = caption[i];
   urlOfDetailPage = "detailPage-v4.html?" + "img=" + url + "&cpt=" + caption[i] + "&des=" + description[i]; //where you will navigate, once you press the image, will send the detail page the img to analyze
    var gridDiv = document.getElementById("gridDiv");
    var imgDiv = document.createElement("div"); //make a div
    var favorite = document.createElement("input");
    favorite.setAttribute("id", [i]);
   imgDiv.setAttribute("class", "imgDiv"); //so it displays at 30% width, margin and padding https://css-tricks.com/almanac/properties/o/object-fit/
   var imgInDiv = document.createElement("img");
   var textid = caption[i];
   var captionpara = document.createElement("h1");
   var captiontext = document.createTextNode(caption[i]);
   captionpara.appendChild(captiontext);
   imgDiv.appendChild(captionpara);
   imgInDiv.setAttribute("class", "pctImg"); //fit to div
   imgInDiv.setAttribute("src", url); //src to url, above, determined by for i
   var link = document.createElement("a");
   link.setAttribute("href", urlOfDetailPage); // so you'll navigate to the url
   link.appendChild(imgInDiv); //make the image the link
   imgDiv.appendChild(link);//place the link inside of each div
   console.log(textid);
   $(favorite).attr({
     "type" : "button",
     "id" : [i],
     "class": "btn btn-primary",
     "value" : "Make Favorite",
     "name" : caption[i],
     "onclick" : "console.log(i)"
   });


   var unfavorite = document.createElement("input");
   unfavorite.setAttribute("type", "button");
   unfavorite.setAttribute("id", "unfav");
   $(unfavorite).attr({
     "type" : "button",
     "id" : "unfav" + [i],
     "class": "btn btn-danger",
     "value" : "Unfavorite"
   });
   $(imgDiv).append(favorite, unfavorite);
   gridDiv.appendChild(imgDiv);


 }
