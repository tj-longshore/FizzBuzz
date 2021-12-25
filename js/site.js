//get range values from The App page
//Start / controller function
function getValues(){
    //get values from the page
    let startingValue = document.getElementById("startingValue").value;
    let endingValue = document.getElementById("endingValue").value;

    startingValue = parseInt(startingValue);
    endingValue = parseInt(endingValue);
    

    if(Number.isInteger(startingValue) && Number.isInteger(endingValue)){
        //call generateNumbers
        numbers = generateNumbers(startingValue, endingValue);
        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("Error: Values Entered Must Be Integers")
    }

}

//generate the numbers from the startingValue to endingValue
//logic function(s)
function generateNumbers(sValue, eValue){
    let numbers = [];

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    for (let i = sValue; i <= eValue; i++){
        if ((i % fizzValue === 0) && (i % buzzValue === 0)){
            numbers[i] = "FizzBuzz";
        } else if (i % fizzValue === 0) {
            numbers[i] = "Fizz";
        } else if (i % buzzValue === 0) {
            numbers[i] = "Buzz";
        } else {
            numbers.push(i);
        }
    }
    return numbers;
}

//display the numbers and mark even numbers bold
//display or view function
function displayNumbers(numbers){

    let templateRows = "";

    for(let i = 0; i < numbers.length; i++){

        let className = "standard";

        let number = numbers[i];

        if (number == "FizzBuzz"){
            number = `<span class="fizz">Fizz</span><span class="buzz">Buzz</span>`;
        }else if(number == "Fizz"){
            className = "fizz";
        } else if(number == "Buzz") {
            className = "buzz";
        } else {
            className = "standard";
        }
        templateRows += `<tr class="${className}"><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}