var slicesEatean = document.getElementById('slicesEaten');
var pizzaPorcions = document.getElementById('pizzaPorcions');
var totalPrice = document.getElementById('totalPrice');
var calculation = 0;
document.getElementById('output').style.visibility = 'hidden';

slicesEatean.addEventListener('input', calculate);
pizzaPorcions.addEventListener('input', calculate);
totalPrice.addEventListener('input', calculate);

function calculate(){
    if(pizzaPorcions.value >= 0){
        calculation = (totalPrice.value / pizzaPorcions.value) * slicesEatean.value;
        if (calculation >= 1) {
            document.getElementById('output').innerHTML = 'You have to pay ' + calculation + '$';
            document.getElementById('output').style.visibility = 'visible';
        }
    }
}




