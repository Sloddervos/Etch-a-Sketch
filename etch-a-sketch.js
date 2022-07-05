
   // button creation 
   var button = document.createElement("button");
   button.addEventListener('click', gridCreate)
   button.innerHTML = "Click here to change the size of the grid";
   document.body.appendChild(button);

 // function which creates grid from user input  

  function gridCreate(){
    let gridSize = prompt("Please enter the dimensions of the grid, e.g. for a 64x64 grid enter 64", "64");
    
// maybe also make condition so that input value must be a number 
      if (gridSize > 100)
    {
      gridSize = prompt("That number is too large, please enter a number under 100");

    }

function createDiv() {

  // loop which removes the divs from the previous grid, if there was one
  const oldDivs = document.querySelectorAll('div.gridDiv');
  for(let i = 0; i < oldDivs.length; i++){ 
oldDivs[i].remove();
}


  var div = document.createElement("div");
  div.setAttribute("class", "gridDiv");
 return div;
}
    
  // loop which creates divs and appends them all at once using document fragment
  var docFrag = document.createDocumentFragment();
  for(let i = gridSize * gridSize; i > 0; i--) {
      var div = createDiv();
      docFrag.appendChild(div); 

      // creates line break every nth div
      if (i % gridSize == 0)
      div.classList.add("clear");




  }

// appends docFrag to container div
const cont = document.querySelector('div.container');
cont.appendChild(docFrag);

// selects all divs that make up the grid
const divs = document.querySelectorAll('div.gridDiv'); 

// loop which iterates through all divs so event listeners are added to each
for (let i = 0; i < divs.length; i++) {

 divs[i].addEventListener('mouseover', mouseover);

  // divs[i].addEventListener('mouseleave', mouseaway); 
  
// functions inside loop since otherwise it doesn't work
 function mouseover() {
   divs[i].classList.add('hoverColour');
  }
 function mouseaway(){
   divs[i].classList.remove('hoverColour');

 } 
  

}


   }

  



  
 

 




  
 

