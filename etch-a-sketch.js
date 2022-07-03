




// function for creating divs and assigning them the gridDiv class
function createDiv() {
    var div = document.createElement("div");
    div.setAttribute("class", "gridDiv");
   return div;
  }
  
 
  
  // loop which creates 16 divs and appends them to the docFrag
  var docFrag = document.createDocumentFragment();
  for(var i = 0; i < 256; i++) {
      var div = createDiv();
      docFrag.appendChild(div); 

// creates line break every fourth div
      if (i % 16 == 0)
      {
        div.classList.add("clear");
      }
  }
 



// appends docFrag to container div
const cont = document.querySelector('div.container');
  cont.appendChild(docFrag);

  
 // selects all divs that make up the grid
   const divs = document.querySelectorAll('div.gridDiv'); 

   // loop which iterates through all divs so event listeners are added to each
   for (let i = 0; i < divs.length; i++) {
  
    divs[i].addEventListener('mouseover', hoverover);

     divs[i].addEventListener('mouseleave', mouseaway); 
     
// functions inside loop since otherwise it doesn't work
    function hoverover() {
      divs[i].classList.add('hoverColour');
     }
    function mouseaway(){
      divs[i].classList.remove('hoverColour');

    } 
     

   }