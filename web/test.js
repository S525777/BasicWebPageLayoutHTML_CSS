/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function ()
{
    var myarray = ['Item1', 'item2', 'Item3', 'item4', 'item5', 'item6', 'item7']; //initialize array
    var first = myarray[0]; //first element
    var last = myarray[myarray.length - 1]; //last element
    myarray.push('Banana'); // added to end
    myarray.pop(); //removes at the end of myarray
    myarray.shift();//removes first element
    myarray.unshift("Im front"); //added to the front of the array
    myarray.forEach(function (item, index, myarray) {
        console.log(item, index);
    });
    console.log(myarray.indexOf("item5"));
    myarray.splice(1, 1);  //(pos,n) 
    myarray.forEach(function (item, index, myarray) {
        console.log(item, index);
    });
    var shallowCopy = myarray.slice(); // this is how to make a copy
    console.log(shallowCopy);
    delete myarray[3];
    myarray.reverse();
    console.log(myarray);
    console.log(Array.isArray(myarray));

    var fruits = [];
    fruits.push('banana', 'apple', 'peach');
    console.log(fruits.length); // 3
    fruits[5] = 'mango';
    console.log(fruits[5]); // 'mango'
    console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
    console.log(fruits.length); // 6

//increasing the size
    fruits.length = 10;
    console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
    console.log(fruits.length); // 10

//decreasing the size
    fruits.length = 2;
    console.log(Object.keys(fruits)); // ['0', '1']
    console.log(fruits.length); // 2

    var x = Array.from('ARRAY'); // creation of array from string 'ARRAY';
    console.log(x);

    var s = new Set(['foo', window]);  // Array from set
    Array.from(s);


    var user = {
        firstName: 'Krishna',
        lastName: 'Krishna'
    };
    var names = Object.values(user);
    console.log(names.length);
    //String manipulations starts here
    var myString = 'QUERTY TYPE';
    console.log(myString.charAt(7));    //output: F

    var message = "Sam";
    var final = message.concat(" is a", " hopeless romantic."); // "Sam is a hopeless romantic."

    console.log(String.fromCharCode(97, 98, 99, 120, 121, 122));
//output: abcxyz
    console.log(String.fromCharCode(72, 69, 76, 76, 79));
//output: HELLO

var sentence="Hi, my name is Sam!";
console.log((sentence.indexOf("H")));

var myString = 'javascript rox';
console.log(myString.lastIndexOf('r'));// outputs the last occurence of r in a sentence //output: 11

console.log(myString.match('rox'));

var text="excellent";
text.slice(0,4) ; //returns "exce"
text.slice(2,4) ; //returns "ce"

var message="Welcome to jQuery4u";
//word[0] contains "Welcome"
//word[1] contains "to"
//word[2] contains "jQuery"
var word=message.split(" ");
console.log(word);

console.log(message.substr(5,7)); // substr(start,length) vs substring (from,to)
console.log(message.substring(5,7));
console.log(message.toLowerCase());
console.log(message.toUpperCase());
message.trim();

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools"); //replace the strings
console.log(n);


};

