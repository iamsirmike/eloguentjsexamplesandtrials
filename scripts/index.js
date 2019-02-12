    /*=========================================================================
            These are examples and trial questions from EloquentJS book
            Permission is granted to anyone who wants to use my answers
                            No framework or library were used
                                       Enjoy!!
    ==========================================================================*/
    //delaring variables
    let mood="light";
    console.log(mood);
    mood="dark";
    console.log(mood);

    var name="Mike";
    const greetings="Hello ";
    console.log(greetings + name);

    //Simple program to find the largest integer
    // let firstNumber = prompt("enter firstNumber");
    // let secondNumber = prompt("enter secondNUmber");
    // let thirdNumber = prompt("enter thirdNumber");
    // console.log(Math.max(firstNumber, secondNumber, thirdNumber));

    //if and if else statements
    let num = 10;
    if (num < 10){
        console.log("Number is less than 10");
    } else{
        console.log("number is greater or equal to 10");
    }

    //while loop to find 2 to the power 10
    let result = 1;
    let counter = 0;
    while(counter < 10){
        result = result*2;
        // console.log("result " + result);
        counter = counter+1;
        // console.log(counter);
        }
    console.log(result);

    //for loop to find 2 to the power 10
    let fResult = 1;
    for (let fCounter = 0; fCounter < 10; fCounter++){
        fResult = fResult*2;
    }
    console.log(fResult);

    //switch statement
    let weather = "sunny";
    switch(weather){
        case "rainy":
        console.log("its raining");
        break;

        case "sunny":
        console.log("the sun is shining");

        default:
        console.log("don't go outside");
        break;
    }

//Exercise one, Looping a triangle
for(let line = "#"; line.length < 8; line+="#"){
    console.log(line);
}

// exercise two, print fizz buzz
let i = 1;
for (i = 1; i <= 100; i++) {
	if(i%3===0 && i%5===0){
		console.log("fizzbuzz");
	}else if (i%3===0) {
		console.log("fizz");
	}else if(i%5===0){
		console.log("buzz");
	}else{
		console.log(i);
	}
}



    