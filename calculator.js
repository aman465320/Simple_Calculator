let v1 = document.getElementById("result");


function AC() {
  v1.innerHTML = "0";
}
function DEL() {
  let str = v1.innerHTML;
  let k = str.length;
  if (k == 1) {
    v1.innerHTML = "0";
  } else {
    v1.innerHTML = v1.innerHTML.slice(0, k - 1);
  }
}

function Slash() {
  v1.innerHTML += "/";
}
function Add() {
  v1.innerHTML += "+";
}
function Sub() {
  v1.innerHTML += "-";
}
function Star() {
  v1.innerHTML += "*";
}
function One() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "1";
  } else {
    v1.innerHTML += "1";
  }
}
function Two() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "2";
  } else {
    v1.innerHTML += "2";
  }
}
function Three() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "3";
  } else {
    v1.innerHTML += "3";
  }
}
function Four() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "4";
  } else {
    v1.innerHTML += "4";
  }
}
function Five() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "5";
  } else {
    v1.innerHTML += "5";
  }
}
function Six() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "6";
  } else {
    v1.innerHTML += "6";
  }
}
function Seven() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "7";
  } else {
    v1.innerHTML += "7";
  }
}
function Eight() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "8";
  } else {
    v1.innerHTML += "8";
  }
}
function Nine() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "9";
  } else {
    v1.innerHTML += "9";
  }
}
function Dot() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "0.";
  } else {
    let str = v1.innerHTML;
    if (isOperator(str[str.length - 1])) {
      v1.innerHTML += "0.";
    } else {
      v1.innerHTML += ".";
    }
  }
}
function Zero() {
  if (v1.innerHTML == "0") {
    v1.innerHTML = "0";
  } else {
    v1.innerHTML += "0";
  }
}

function Equal() {
  let stri = v1.innerHTML;
  let len = stri.length;

  if (
    isOperator(stri[0]) ||
    isOperator(stri[len - 1]) ||
    stri[len - 1] == "." || isLetter(stri[0]) || isLetter(stri[len-1])
  ) {
    alert("Enter valid expression");
    return false;
  } else {
    let y = 0;
    for (let i = 0; i < stri.length - 1; i++) {
      if (isOperator(stri[i]) && isOperator(stri[i + 1])) {
        alert("Enter valid expression");
        y++;
        return false;
      }
    }
    if (y == 0) {
      let result = eval(stri);
      v1.innerHTML = result;
    }
  }
}

function isOperator(x) {
  if (x == "+" || x == "-" || x == "*" || x == "/") {
    return true;
  }
  return false;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}