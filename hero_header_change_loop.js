var heroheader = 
[
'<font color=#FEFE00> CMS</font><br> <font color=#C8F933>Mobile Apps</font><br> <font color=#96F964>Websites</font>',
'<font color=#FEFE00> UX/UI</font><br> <font color=#C8F933>Wireframes</font><br><font color=#96F964>Specifications</font>', 
'Expert<font color=#FEFE00> storyteller</font><br> puts <font color=#FEFE00> magic </font> into <br>web products'
];
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById('hero-header').innerHTML = heroheader[i];
  if (i == (heroheader.length - 1)) {
    i = 0;
    //you can even clear interval here to make heading stay as last one in array
    //cleanInterval(intervalId);

  } else {
    i++;
  }
}, 5000)