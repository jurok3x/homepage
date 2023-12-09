function init(){
    document.querySelector("button.tablinks").click();
}

function openCv(evt, cvName) {
    var i, tabcontent, tablinks;
    console.log(cvName);
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cvName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
init();