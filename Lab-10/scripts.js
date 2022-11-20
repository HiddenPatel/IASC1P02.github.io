function myFunction() {
      var y = parseInt(document.getElementById("txt1").value);
      var z = parseInt(document.getElementById("txt2").value);
      var x = y + z;
      document.getElementById("demo").innerHTML = x;
    }

function sub() {
var a = parseInt(document.getElementById("txt1").value);
var b = parseInt(document.getElementById("txt2").value);
var c = a - b;
document.getElementById("demo").innerHTML = c;
}


function multi() {
      var q = parseInt(document.getElementById("txt1").value);
      var w = parseInt(document.getElementById("txt2").value);
      var e = (q)*(w);
      document.getElementById("demo").innerHTML = e;
    }

function divide() {
    var r = parseInt(document.getElementById("txt1").value);
    var t = parseInt(document.getElementById("txt2").value);
    var u = (r)/(t);
          document.getElementById("demo").innerHTML = u;
        }
