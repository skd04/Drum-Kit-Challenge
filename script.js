// Create a function to make sound.
function makeSound(key) {

  //  // Make the sounds as per key using If Conditional.
  // if (key == "w") {
  //   var w = new Audio("./sounds/tom-1.mp3");
  //   return w.play();
  // } else if (key == "a") {
  //   var a = new Audio("./sounds/tom-2.mp3");
  //   return a.play();
  // } else if (key == "s") {
  //   var s = new Audio("./sounds/tom-3.mp3");
  //   return s.play();
  // } else if (key == "d") {
  //   var d = new Audio("./sounds/tom-4.mp3");
  //   return d.play();
  // } else if (key == "j") {
  //   var j = new Audio("./sounds/snare.mp3");
  //   return j.play();
  // } else if (key == "k") {
  //   var k = new Audio("./sounds/crash.mp3");
  //   return k.play();
  // } else if (key == "l") {
  //   var l = new Audio("./sounds/kick-bass.mp3");
  //   return l.play();
  // }

  // Make the sounds as per key using Switch method.
  switch (key) {
    case "w":
      var w = new Audio("./sounds/tom-1.mp3");
      w.play();
      break;
    case "a":
      var a = new Audio("./sounds/tom-2.mp3");
      a.play();
      break;
    case "s":
      var s = new Audio("./sounds/tom-3.mp3");
      s.play();
      break;
    case "d":
      var d = new Audio("./sounds/tom-4.mp3");
      d.play();
      break;
    case "j":
      var j = new Audio("./sounds/snare.mp3");
      j.play();
      break;
    case "k":
      var k = new Audio("./sounds/crash.mp3");
      k.play();
      break;
    case "l":
      var l = new Audio("./sounds/kick-bass.mp3");
      l.play();
      break;
    default:
      console.log(keyPressed);
  }
}

// Create a variable to count the drum keys.
var drumKeys = document.querySelectorAll(".drum").length;

// Set e loop to make all buttons clickable using for loop.
for (var i = 0; i < drumKeys; i++) {
  // Make Clickable button.
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    // Make Sound
    makeSound(this.innerHTML);

    // Show the button animation.
    buttonAnimation(this.innerHTML);
  });
}
// Read and react as per key.
document.addEventListener("keydown", function(event){
  // To make sound.
  makeSound(event.key);

  // Show the button animation.
  buttonAnimation(event.key);
});

// Create a function to animate the buttons.
function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 120);
}
