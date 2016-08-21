/**
 * Created by saroj on 8/15/16.
 */

"use strict";

var keys = document.querySelectorAll("#calculator span");
var operators = ['+', '-', 'x', '÷'];
var p = document.querySelector("#result");

// Add onclick event to all the keys and perform operations
for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        // Get the input and button values
        var input = document.querySelector('p');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if (btnVal == 'C') {
            input.innerHTML = '';
        }
        else if (btnVal == '=') {
            var equation = inputVal;

            if (equation) {
                input.innerHTML = eval(equation);
            }
        }
        else {
            if (isInsertable(btnVal, inputVal)) {
                input.innerHTML += btnVal;
            }
        }
    };

    keys[i].onmouseover = function () {
        this.style.cursor = "hand";
    };

    keys[i].onmouseout = function () {
        this.style.cursor = "pointer";
    };
}

function isInsertable(btnVal, inputVal) {
    var insertable;
    console.log(btnVal, inputVal, Number(btnVal));
    if (inputVal.length == 0) {
        insertable = true;
    }
    else if (Number(btnVal) !== NaN) {
        insertable = true;
    }
    else if(operators.indexOf(inputVal[inputVal.length - 1]) == -1) {
        insertable = true;
    }
    else {
        insertable = false
    }
    return insertable;
}
