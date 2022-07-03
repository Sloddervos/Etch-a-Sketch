





function createDiv() {
    var div = document.createElement("div");
    div.setAttribute("class", "gridDiv");
   return div;
  }
  
  var divs = [
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv()
  ];
  
  var docFrag = document.createDocumentFragment();
  for(var i = 0; i < divs.length; i++) {
    docFrag.appendChild(divs[i]); // Note that this does NOT go to the DOM
  }
  
// Appends all divs at once
const cont = document.querySelector('div.container');
  cont.appendChild(docFrag);