'use strict'

var JohnWeight = 65;
var DaniWeight = 165;
var JohnHeight = 65;
var DaniHeight = 194;

var JhonBmi = JohnWeight/(JohnHeight**2);
var DaniBmi = DaniWeight/(DaniHeight**2);

document.write(`John BMI VALUE : ${JhonBmi}`);
document.write(`<br></br>`);
document.write(`John BMI VALUE : ${DaniBmi}`);
document.write(`<br></br>`);
document.write(JhonBmi<DaniBmi);
document.write("JohnBMI is greater than DanielBmi");
