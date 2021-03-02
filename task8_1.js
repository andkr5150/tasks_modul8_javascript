let inputValue = prompt("Input value");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else {
    console.log("oops it seems you were wrong");
}
