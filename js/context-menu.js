window.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
})
window.addEventListener("click", function() {
  document.getElementById("context-menu").classList.remove("active");
})

function reload() {
  location.reload();
}

function share(){
  if (navigator.share) {

  navigator.share({

    title: document.title,

    text: "Check This Website -",

    url: window.location.href

  }).then(() => console.log('Successful share'))

  .catch(error => console.log('Error sharing:', error));

}
  }

function exit() {


  if (confirm("Close Window?")) {

    close();

  }
}

window.onbeforeunload = function exitOnNotSavedChanges() { 

       if(confirm('Are you sure to exit?')) 

           return true; 

      else 

           return false; 

};

function inspectEl() {
  javascript: (function() { var script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = function() { eruda.init() } })();
}
