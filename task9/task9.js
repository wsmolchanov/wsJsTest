let symbol = '';
let needEmpty = false;

function fplus() {
  symbol = '+';

  value = parseInt(document.getElementById("rezult").innerHTML);
  document.getElementById("arhiv").innerHTML = value + "+";
  document.getElementById("rezult").innerHTML = "";
}

function fminus() {
  symbol = '-';
  value = parseInt(document.getElementById("rezult").innerHTML);
  document.getElementById("arhiv").innerHTML = value + "-";
  document.getElementById("rezult").innerHTML = "";
}

function fmultiply() {
  symbol = '*';
  value = parseInt(document.getElementById("rezult").innerHTML);
  document.getElementById("arhiv").innerHTML = value + "*";
  document.getElementById("rezult").innerHTML = "";
}

function fdivide() {
  symbol = '/';
  value = parseInt(document.getElementById("rezult").innerHTML);
  document.getElementById("arhiv").innerHTML = value + "/";
  document.getElementById("rezult").innerHTML = "";
}

function fpercent() {
  symbol = '%';
  value = parseInt(document.getElementById("rezult").innerHTML);
  document.getElementById("arhiv").innerHTML = value + "%";
  document.getElementById("rezult").innerHTML = "";
}

function fequally() {
  let value_3;

  value_1 = parseInt(document.getElementById("arhiv").innerHTML, 10);
  value_2 = document.getElementById("rezult").innerHTML;
  value_2 = parseInt(value_2, 10);

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
}

function fdelete() {
  document.getElementById("rezult").innerHTML = "0";
  document.getElementById("arhiv").innerHTML = "";
}


function fzero() {
  from_id = document.getElementById("id0").innerHTML;
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

function fone() {
  from_id = document.getElementById("id1").innerHTML;
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

function ftwo() {
  from_id = document.getElementById("id2").innerHTML;
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

function fthree() {
  from_id = document.getElementById("id3").innerHTML;
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

function ffour() {
  from_id = document.getElementById("id4").innerHTML;
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

function ffive() {
  from_id = document.getElementById("id5").innerHTML;
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
function fsix() {
  from_id = document.getElementById("id6").innerHTML;
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

function fseven() {
  from_id = document.getElementById("id7").innerHTML;
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

function feight() {
  from_id = document.getElementById("id8").innerHTML;
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

function fnine() {
  from_id = document.getElementById("id9").innerHTML;
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