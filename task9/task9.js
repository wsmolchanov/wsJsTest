let symbol = '';
let needEmpty = false;
let chain = false;
let oldValue = 0;


function faction(sym) {
  if (chain) {
    fequally();
  }
  value = parseInt(document.getElementById("rezult").innerHTML);
  symbol = sym;
  document.getElementById("arhiv").innerHTML = value + sym;
  chain = true;
  needEmpty = true;

}

function fnumbers(id) {
  from_id = document.getElementById(id).innerHTML;
  from_rezult = document.getElementById("rezult").innerHTML;
  if (needEmpty) {
    document.getElementById("rezult").innerHTML = "";
    needEmpty = false;
  } else {
    if (from_rezult === "0") { document.getElementById("rezult").innerHTML = ""; }
    from_length = from_rezult.length;
  }
  document.getElementById("rezult").innerHTML += from_id;

}

function fequally() {
  let value_3;

  value_1 = parseInt(document.getElementById("arhiv").innerHTML, 10);
  value_2 = document.getElementById("rezult").innerHTML;
  value_2 = parseInt(value_2, 10);
  if (!value_1) { value_1 = oldValue; }
  else { oldValue = value_2; }

  if (symbol === "+") { value_3 = value_1 + value_2; }
  if (symbol === "-") { value_3 = value_1 - value_2; }
  if (symbol === "*") { value_3 = value_1 * value_2; }
  if (symbol === "/") { value_3 = value_1 / value_2; }
  if (symbol === "%") {
    value_3 = value_1 * value_2 / 100;
  }
  document.getElementById("rezult").innerHTML = value_3;
  document.getElementById("arhiv").innerHTML = "";
  value_3 = String(value_3);
  count = value_3.length;
  needEmpty = true;
  chain = false;
}

function fdelete() {
  chain = false;
  document.getElementById("rezult").innerHTML = "0";
  document.getElementById("arhiv").innerHTML = "";
}


