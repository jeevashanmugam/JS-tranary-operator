document.write("Using ternary Operator" + "<br><br>")

let a = prompt("Enter the age");

let type = a >= 18 ? "Eligible for vote " : "Not eligible for vote";
document.write(type + "<br><br>");




let age = a <= 18 ? "School student"
  : a <= 25 ? "College Student"
    : a <= 30 ? "Got a Job"
      : "No More";

document.write(age);      