let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
};

// let Index = 0;
// carousel();

// function carousel() {
//   let u;
//   let y = document.getElementsByClassName("SlideText_box");
//   for (i = 0; u < x.length; u++) {
//     y[i].style.display = "none";  
//   }
//   Index++;
//   if (Index > y.length) {Index = 1}    
//   y[Index-1].style.display = "block";  
//   setTimeout(carousel, 2000); 
// }