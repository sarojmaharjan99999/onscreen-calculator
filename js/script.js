// /**
//  * Created by saroj on 8/15/16.
//  */
//
// "use strict";
//
// var keys = document.querySelectorAll("#calculator span");
// var operators = ['+', '-', 'x', '/' , '.' , '%'];
// var p = document.querySelector("#result");
// var clearButtonValue = "C";
//
// // Add onclick event to all the keys and perform operations
// for (var i = 0; i < keys.length; i++) {
//     keys[i].onclick = function (e) {
//         // Get the input and button values
//         var input = document.querySelector('p');
//         var inputVal = input.innerHTML;
//         var btnVal = this.innerHTML;
//
//         if (btnVal === clearButtonValue) {
//             input.innerHTML = '';
//         }
//         else if (btnVal === '=') {
//             var equation = inputVal;
//             equation = equation.replace(/x/g, '*');
//
//             if (equation) {
//                 input.innerHTML = eval(equation);
//             }
//         }
//         else {
//             if (isInsertable(btnVal, inputVal)) {
//                 input.innerHTML += btnVal;
//             }
//         }
//     };
//
//     keys[i].onmouseover = function () {
//         this.style.cursor = "hand";
//     };
//
//     keys[i].onmouseout = function () {
//         this.style.cursor = "pointer";
//     };
// }
//
// function isInsertable(btnVal, inputVal) {
//     var insertable;
//     console.log(btnVal, inputVal, Number(btnVal));
//     if (inputVal.length == 0) {
//         insertable = true;
//     }
//     else if (operators.indexOf(btnVal) == -1) {
//         insertable = true;
//     }
//     else if(operators.indexOf(inputVal[inputVal.length - 1]) == -1) {
//         insertable = true;
//     }
//     else {
//         insertable = false
//     }
//     return insertable;
// }



"use strict";

var keys = document.querySelectorAll("#calculator span");
var operators = ['+', '-', 'x', '/' , '.' , '%'];
var p = document.querySelector("#result");
var clearButtonValue = "C";

// Add onclick event to all the keys and perform operations
for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        // Get the input and button values
        var input = document.querySelector('p');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
        var lastChar = inputVal[inputVal.length-1];
        if (btnVal === clearButtonValue) {
            input.innerHTML = '';
        }

        else if (btnVal === '=') {
            inputVal = inputVal.replace(/x/g, '*');

            // if (inputVal) {
            input.innerHTML = eval(inputVal);
            // }
        }
        else if(operators.indexOf(btnVal) > -1) {

            // Only add operator if input is not empty and there is no operator at the last
            if(inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;

            // Replace the last operator (if exists) with the newly pressed operator
            if(operators.indexOf(lastChar) > -1 ) {
                // Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }
        }
        else {
            input.innerHTML += btnVal;
        }
    };

    keys[i].onmouseover = function () {
        this.style.cursor = "hand";
    };

    keys[i].onmouseout = function () {
        this.style.cursor = "pointer";
    };
}

