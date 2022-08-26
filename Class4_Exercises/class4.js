//Grab Event from the DOM

//Attach Event Listners

// Bulky code for background color
const body = document.querySelector('body');
body.style.backgroundColor = ('#ff00ff');


// Task 1
function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

// Task 2
const arr1 = [true, true, false, true, true, true, false];
const countTrue = arr1.filter(value => value === true).length;

console.log(countTrue); 


