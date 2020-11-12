var option = parseInt(process.argv[3]);
var temperature = process.argv[2];
switch (option) {
    case 1:
        console.log("Temperature in Fahrenheit is : " + celsius_to_fahrenheit(temperature));
        break;
    case 2:
        console.log("Temperature in Fahrenheit is : " + fahrenheit_to_celsius(temperature));
        break;
}
function celsius_to_fahrenheit(temperature) {
    if (temperature > 100 || temperature < 0) {
        return "Invalid Input";
    }
    else {
        return (9 / 5) * temperature + 32;
    }
}
function fahrenheit_to_celsius(temperature) {
    if (temperature < 32 || temperature > 212) {
        return "Invalid Input";
    }
    else {
        return (temperature - 32) * 5 / 9;
    }
}