/**
 * Created by saroj on 8/15/16.
 */

"use strict"

var keys = document.querySelectorAll("#calculator span");
var operators = ['+', '-', 'x', '÷'];
var p  = document.querySelector("#result");


// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        // Get the input and button values
        var input = document.querySelector('p');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if (btnVal == 'C'){
            input.innerHTML = '';
        }
        else if (btnVal == '=') {
            var equation = inputVal;


            if (equation)
                input.innerHTML = eval(equation);
        }
        else  {
            var lastChar = inputVal[inputVal.length - 1];
                console.log(lastChar);
            if(operators.indexOf(lastChar) !== -1) {
                input.innerHTML += btnVal;
            }
        }
    }


    keys[i].onmouseover = function () {
        this.style.cursor = "hand";
    }
    keys[i].onmouseout = function () {
        this.style.cursor = "pointer";
    }

}

