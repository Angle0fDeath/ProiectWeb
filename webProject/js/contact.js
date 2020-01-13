var prob =document.getElementById("problem");

var star = ["*"];
var cuv1 = ["Just Tell Us"];
var cuv2 = ["We will help!"];
var fraza = cuv1.concat(cuv2);
prob.placeholder = fraza;


function big() {
  star.push("*");
  prob.value = star;
}

function less() {
  star.pop();
  prob.value = star;
}


