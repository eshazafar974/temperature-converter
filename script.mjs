function convert(event){
    event.preventDefault();
    console.log("THE FUNCTION IS RUNNING")

    let celsius = document.querySelector("#inputCelsius").value;

    let fahrenheit = celsius * (9/5)+32;

    document.querySelector("#converter").innerHTML=`the celsius in fahrenheit is ${fahrenheit}`;

    console.log (celsius)
    console.log(fahrenheit)
}