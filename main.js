var slicesEatean = document.getElementById('slicesEaten');
var pizzaPorcions = document.getElementById('pizzaPorcions');
var totalPrice = document.getElementById('totalPrice');
var calculation = 0;

slicesEatean.addEventListener('input', calculate);
pizzaPorcions.addEventListener('input', calculate);
totalPrice.addEventListener('input', calculate);

function calculate(){
    if(pizzaPorcions.value >= 0){
        calculation = (totalPrice.value / pizzaPorcions.value) * slicesEatean.value;
        if (calculation >= 1) {
            document.getElementById('output').innerHTML = calculation.toFixed(2) + '$';
            document.getElementById('output').style.display = 'block';
        }
    }
}

function consoleLog() {
    const cssRule =
          "color: rgb(249, 162, 34);" +
          "font-size: 60px;" +
          "font-weight: bold;" +
          "text-shadow: 1px 1px 5px rgb(249, 162, 34);" +
          "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
        console.log("%cPizza is love 🤙🍕", cssRule);
  }

  consoleLog();


