// Defining some variables
var annualClass = document.getElementsByClassName("annual-price");
var monthClass = document.getElementsByClassName("monthly-price");
var annualID = document.getElementById("bill__annually");
var monthID = document.getElementById("bill__monthly");

function billMonthly() {
  // Changes active state of buttons
  monthID.classList.add("active");
  annualID.classList.remove("active");

  // Cycles through elements with the defined classes to change CSS
  for(var i=0; i<monthClass.length; i++) { 
    monthClass[i].style.display='flex';
  }

  for(var i=0; i<annualClass.length; i++) { 
    annualClass[i].style.display='none';
  }

};

function billAnnually() {
  // Changes active state of buttons
  annualID.classList.add("active");
  monthID.classList.remove("active");

  // Cycles through elements with the defined classes to change CSS
  for(var i=0; i<annualClass.length; i++) { 
    annualClass[i].style.display='flex';
  }

  for(var i=0; i<monthClass.length; i++) { 
    monthClass[i].style.display='none';
  }
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Adds and removes the "active" class to an accordion button
    this.classList.toggle("active");

    // Hides and show accordion content
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}