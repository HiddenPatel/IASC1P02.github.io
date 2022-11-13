function myFunction() {
  let age = prompt("Please enter your age");
  let year = (2022 - age);
  if (age != null) {
    document.getElementById("demo").innerHTML = "you are born in: " + year;
  }
}
