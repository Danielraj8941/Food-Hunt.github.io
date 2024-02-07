"use strict";
var Name= prompt("Enter your name");
var Qualification= prompt("Enter your Qualification");
var ImdNo= prompt("Enter your Imd no");
var CourseName= prompt("Enter your Course name");
var Locations= prompt("Enter your Location");

// var All= 'Your Name : ${Name} Your Qualification : ${Qualification} Your Imd no : ${ImdNo} Your Course name : ${CourseName} Your Location : ${Location}';

// console.log(`${All}`)
document.writeln(`<h1>Your Name:${Name}</h1>`);
document.writeln(`${"<br>"}`);
document.writeln(`<h1>Your Qualification:${Qualification}</h1>`);
document.writeln(`${"<br>"}`);
document.writeln(`<h1>Your Imdno:${ImdNo}</h1>`);
document.writeln(`${"<br>"}`);
document.writeln(`<h1>Your Course name:${CourseName}</h1>`);
document.writeln(`${"<br>"}`);
document.writeln(`<h1>Your location:${Locations}</h1>`);
