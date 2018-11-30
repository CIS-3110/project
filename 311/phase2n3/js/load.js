$( function() { //shorthand for document when ready
    //breakUpURLParameters(); //firtst things first, grab the url params and format the page
    $("#u").click(function(){
        //alert("testing this");
        var h = "kevin2.html"; //
        console.log(h);//should be prior url visited, before here
        window.location.href = h;
    });

    function checkingCookie(x) {
        var user=getCookie("image" + x);
        //console.log("image" + x);
        if (user != "") {
            var icon = document.createElement("img");
            icon.setAttribute("class", "icon");
            icon.setAttribute("src", "star.png");
            var t = document.getElementById("effectDiv");
            t.appendChild(icon);
            console.log("star");
        } else {
          console.log("no star");
          $("#effectDiv img").remove();
          //$(".icon").css("display", "none");
        }
    }





    //url param handling
    var url = window.location.href;
    console.log("url = " + url);
    var x = breakUpURLParameters(url);
      console.log(x.search);
      console.log("img url  = " + x.search.img); //please refer to http://www.w3schools.com/jsref/jsref_map.asp for example code
      console.log("cpt = " + x.search.cpt);
      console.log("des = " + x.search.des);

      var switcher;
      if (x.search.cpt == "Nissan") {
        switcher = 0;
        console.log(switcher);
        checkingCookie(switcher);
      } else if (x.search.cpt == "Rolls-Royce") {
        switcher = 1;
        console.log(switcher);
        checkingCookie(switcher);
      } else if (x.search.cpt == "Porsche") {
        switcher = 2;
        console.log(switcher);
        checkingCookie(switcher);
      } else if (x.search.cpt == "Aston%20Martin") {
        switcher = 3;
        console.log(switcher);
        checkingCookie(switcher);
      } else if (x.search.cpt == "Pagani") {
        switcher = 4;
        console.log(switcher);
        checkingCookie(switcher);
      } else if (x.search.cpt == "Dodge") {
        switcher = 5;
        console.log(switcher);
        checkingCookie(switcher);
      }


    var t = document.getElementById("effectDiv");//grab the div and use the following lines to attach the image to it
    var y = document.createElement("img");
    var captionpara = document.createElement("h1");
    var captiontext = document.createTextNode(x.search.cpt);

    var descriptionpara = document.createElement("p");
    var descriptiontext = document.createTextNode(x.search.des);
    console.log(descriptiontext);
    decodeURI(descriptiontext);
    decodeURI(captiontext);
    var format = descriptiontext.nodeValue.replace(/%20/g,' ');
    var format1 = captiontext.nodeValue.replace(/%20/g,' ');
    window.decodeURIComponent(descriptiontext);
    window.decodeURIComponent(captiontext);
    console.log(decodeURI(descriptiontext));
    console.log(format);
    console.log(format1);
    var formatted = document.createTextNode(format);
    var formatted1 = document.createTextNode(format1);

    document.title = x.search.cpt;
    captionpara.appendChild(formatted1);
    var breakme = document.createElement("br");
    captionpara.appendChild(breakme);
    descriptionpara.appendChild(formatted);
    y.setAttribute("src", x.search.img); // set up and assign img src
    y.setAttribute("class", "pctImg"); //uses css class, be sure it's in the head area
    t.appendChild(y);//populate div with image, via url parameters
    t.appendChild(captionpara);
    t.appendChild(descriptionpara);
    function breakUpURLParameters(url) {        //analyze and output the url parameters as a useful array to caller
        //  create a link in the DOM and set its href
        var link = document.createElement('a');
        link.setAttribute('href', url);
        console.log("path variable is " + url);
        //  return an easy-to-use object that breaks apart the path
        return {
            host:     link.hostname,  //  'example.com'
            port:     link.port,      //  12345
            search:   mapMaker(link.search),  //  {startIndex: 1, pageSize: 10}
            path:     link.pathname,  //  '/blog/foo/bar'
            protocol: link.protocol   //  'http:'
        }
    }
  function mapMaker(search, preserveDuplicates) { //responsible for obtaining all url params, representing them into an array
      //  option to preserve duplicate keys (e.g. 'sort=name&sort=age')
      preserveDuplicates = preserveDuplicates || false;  //  disabled by default
      var outputNoDupes = {};
      var returnableArray = [];  //  optional output array to preserve duplicate keys
      //  sanity check
      if(!search) throw new Error('mapMaker: your search input param is misformed?');
      //  remove ? character from your url (?foo=1&bar=2 -> 'foo=1&bar=2')
      search = search.split('?')[1];
      //  split apart your keys into a useful array of key/value pairs ('foo=1&bar=2' -> ['foo=1', 'bar=2'])
      search = search.split('&');
      //  separate keys from values (['foo=1', 'bar=2'] -> [{foo:1}, {bar:2}])
      //  then package as an array for your caller to use as variables
      returnableArray = search.map(function(keyval){
                                   var out = {};
                                   keyval = keyval.split('=');
                                   out[keyval[0]] = keyval[1];
                                   outputNoDupes[keyval[0]] = keyval[1]; //  might as well do the no-dupe work too while we're in the loop
                                   return out;
                                   });
                                   return (preserveDuplicates) ? returnableArray : outputNoDupes;
  }
});
