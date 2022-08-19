document.getElementById('myname').innerHTML = 'M.Srinivasa';
if(document.getElementById('myname').innerHTML == 'M.Srinivasa'){


var colorWell;
var defaultColor = "#e6006b";
window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector("#clrpic");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);

  colorWell.select();
}
function updateFirst(event) {
 
    var CLR = document.getElementById("clrpic").value;
   document.documentElement.style.setProperty('--theme-color', CLR);
  
}
function paintcolor(){
    document.getElementById('clrpic').click();
  }

function theme(){
 document.body.classList.toggle("dark-theme");
 if(document.body.classList.contains("dark-theme")){
    document.getElementById("ictheme").classList.remove('fa-moon-o');
    document.getElementById("ictheme").classList.add('fa-sun-o');
    document.querySelector("meta[name=theme-color]").setAttribute("content","#0d0e0e");
    if(document.getElementById("home").style.display == "block") {
        homeclk();}
    else if(document.getElementById("software").style.display == "block"){
        softclk();
    }
    else if(document.getElementById("app").style.display == "block"){
        appclk();
    }
    else if(document.getElementById("info").style.display == "block"){
        infoclk();
    }
 }else{
    document.getElementById("ictheme").classList.remove('fa-sun-o');
    document.getElementById("ictheme").classList.add('fa-moon-o');
    document.querySelector("meta[name=theme-color]").setAttribute("content","#eaedf1");

    if(document.getElementById("home").style.display == "block") {
        homeclk();}
    else if(document.getElementById("software").style.display == "block"){
        softclk();
    }
    else if(document.getElementById("app").style.display == "block"){
        appclk();
    }
    else if(document.getElementById("info").style.display == "block"){
        infoclk();
    }
 }
}
function themecheck(theme){
    if(document.body.classList.contains("dark-theme")){
    return "#0d0e0e";
 }else{
    return "#eaedf1";
 }
}

homeclk();
function homeclk(){
    document.getElementById("myinfopic").style.position= "relative";
    var theme1 = themecheck();
    document.getElementById("home").style.display = "block";
    document.getElementById("homepg").style.display = "block";
    document.getElementById("icrd1").style.backgroundColor = "var(--theme-color)";
    document.getElementById("ichome").style.color = theme1;
    document.getElementById("icrd1").style.width = "90px";
    document.getElementById("icrd1").style.boxShadow = "2px 3px 2px var(--white-shadow)";


    document.getElementById("software").style.display = "none";
    document.getElementById("icrd2").style.backgroundColor = theme1;
    document.getElementById("icrd2").style.width = "30px";
    document.getElementById("icsoft").style.color = "var(--theme-color)";
    document.getElementById("softpg").style.display = "none";
    document.getElementById("icrd2").style.boxShadow = "2px 3px 2px var(--primary-color)";
    

    document.getElementById("app").style.display = "none";
    document.getElementById("icrd3").style.backgroundColor = theme1;
    document.getElementById("icrd3").style.width = "30px";
    document.getElementById("icapp").style.color = "var(--theme-color)";
    document.getElementById("apppg").style.display = "none";
    document.getElementById("icrd3").style.boxShadow = "2px 3px 2px var(--primary-color)";

    document.getElementById("info").style.display = "none";
    document.getElementById("icrd4").style.backgroundColor = theme1;
    document.getElementById("icrd4").style.width = "30px";
    document.getElementById("icinfo").style.color = "var(--theme-color)";
    document.getElementById("infopg").style.display = "none";
    document.getElementById("icrd4").style.boxShadow = "2px 3px 2px var(--primary-color)";
    
}

function softclk(){
    var theme2 = themecheck();
    document.getElementById("software").style.display = "block";
    document.getElementById("softpg").style.display = "block";
    document.getElementById("icrd2").style.backgroundColor = "var(--theme-color)";
    document.getElementById("icsoft").style.color = theme2;
    document.getElementById("icrd2").style.width = "110px";
    document.getElementById("icrd2").style.boxShadow = "2px 3px 2px var(--white-shadow)";


    document.getElementById("home").style.display = "none";
    document.getElementById("icrd1").style.backgroundColor = theme2;
    document.getElementById("icrd1").style.width = "30px";
    document.getElementById("ichome").style.color = "var(--theme-color)";
    document.getElementById("homepg").style.display = "none";
    document.getElementById("icrd1").style.boxShadow = "2px 3px 2px var(--primary-color)";

    document.getElementById("app").style.display = "none";
    document.getElementById("icrd3").style.backgroundColor = theme2;
    document.getElementById("icrd3").style.width = "30px";
    document.getElementById("icapp").style.color = "var(--theme-color)";
    document.getElementById("apppg").style.display = "none";
    document.getElementById("icrd3").style.boxShadow = "2px 3px 2px var(--primary-color)";

    document.getElementById("info").style.display = "none";
    document.getElementById("icrd4").style.backgroundColor = theme2;
    document.getElementById("icrd4").style.width = "30px";
    document.getElementById("icinfo").style.color = "var(--theme-color)";
    document.getElementById("infopg").style.display = "none";
    document.getElementById("icrd4").style.boxShadow = "2px 3px 2px var(--primary-color)";
}

function appclk(){
    var theme3 = themecheck();

    document.getElementById("app").style.display = "block";
    document.getElementById("apppg").style.display = "block";
    document.getElementById("icrd3").style.backgroundColor = "var(--theme-color)";
    document.getElementById("icapp").style.color = theme3;
    document.getElementById("icrd3").style.width = "70px";
    document.getElementById("icrd3").style.boxShadow = "2px 3px 2px var(--white-shadow)";


    document.getElementById("home").style.display = "none";
    document.getElementById("icrd1").style.backgroundColor = theme3;
    document.getElementById("ichome").style.color = "var(--theme-color)";
    document.getElementById("icrd1").style.width = "30px";
    document.getElementById("homepg").style.display = "none";
    document.getElementById("icrd1").style.boxShadow = "2px 3px 2px var(--primary-color)";

    document.getElementById("software").style.display = "none";
    document.getElementById("icrd2").style.backgroundColor = theme3;
    document.getElementById("icsoft").style.color = "var(--theme-color)";
    document.getElementById("icrd2").style.width = "30px";
    document.getElementById("softpg").style.display = "none";
    document.getElementById("icrd2").style.boxShadow = "2px 3px 2px var(--primary-color)";


    document.getElementById("info").style.display = "none";
    document.getElementById("icrd4").style.backgroundColor = theme3;
    document.getElementById("icinfo").style.color = "var(--theme-color)";
    document.getElementById("icrd4").style.width = "30px";
    document.getElementById("infopg").style.display = "none";
    document.getElementById("icrd4").style.boxShadow = "2px 3px 2px var(--primary-color)";
    
}

function infoclk(){
    var theme4 = themecheck();

    document.getElementById("info").style.display = "block";
    document.getElementById("infopg").style.display = "block";
    document.getElementById("icrd4").style.backgroundColor = "var(--theme-color)";
    document.getElementById("icinfo").style.color = theme4;
    document.getElementById("icrd4").style.width = "70px";
    document.getElementById("icrd4").style.boxShadow = "2px 3px 2px var(--white-shadow)";


    document.getElementById("home").style.display = "none";
    document.getElementById("icrd1").style.backgroundColor = theme4;
    document.getElementById("ichome").style.color = "var(--theme-color)";
    document.getElementById("icrd1").style.width = "30px";
    document.getElementById("homepg").style.display = "none";
    document.getElementById("icrd1").style.boxShadow = "2px 3px 2px var(--primary-color)";

    document.getElementById("software").style.display = "none";
    document.getElementById("icrd2").style.backgroundColor = theme4;
    document.getElementById("icsoft").style.color = "var(--theme-color)";
    document.getElementById("icrd2").style.width = "30px";
    document.getElementById("softpg").style.display = "none";
    document.getElementById("icrd2").style.boxShadow = "2px 3px 2px var(--primary-color)";

    document.getElementById("app").style.display = "none";
    document.getElementById("icrd3").style.backgroundColor = theme4;
    document.getElementById("icapp").style.color = "var(--theme-color)";
    document.getElementById("icrd3").style.width = "30px";
    document.getElementById("apppg").style.display = "none";
    document.getElementById("icrd3").style.boxShadow = "2px 3px 2px var(--primary-color)";

}
function facebook(){
    window.open('https://m.facebook.com/srini582003');
}
function youtube(){
    window.open('https://www.youtube.com/channel/UCZ5XptKFuGVHr4_n3FsnYow');
}
function whatsapp(){
    window.open('http://srini582003whatsapp.tk');
}
function twitter(){
    window.open('https://twitter.com/srini582003');
}
function instagram(){
    window.open('https://instagram.com/srini582003');
}
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 
document.getElementById('mobile').style.display="block"
document.getElementById('desktop').style.display="none"
}else{
 
document.getElementById('mobile').style.display="none"
document.getElementById('desktop').style.display="block"

}

  document.oncontextmenu = document.body.oncontextmenu = function() {
 return false;
 }

    document.onkeydown = function (e) {
        return false;
    }