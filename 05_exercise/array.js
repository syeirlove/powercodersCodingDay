var fruits = ["Banana", "Orange", "Apple", "Mango"];

function getFirstValue(fruits) {
      var myFruits = fruits.sort();
      fruits = myFruits.reverse();
    return document.getElementById("myArray").innerHTML = fruits[0];
}
getFirstValue(fruits);