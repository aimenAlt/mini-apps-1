var spotNodes = document.querySelectorAll('.board');


spotNodes.forEach((spot) => spot.addEventListener("click", function() {
    // console.log(spot);
    // Here, `this` refers to the element the event was hooked on
  if (spot.innerHTML != "X" && spot.innerHTML != "O") {
    spot.innerHTML = switchTurn();
    winCheck(spot.innerHTML);
  }
  }));

var turnWho = document.querySelectorAll('.turn');

var switchTurn = function () {
    var who = turnWho[0].innerHTML;
    if (who === "X") {
        turnWho[0].innerHTML = "O";
        turnWho[1].innerHTML = "O"
    } else if (who === "O") {
        turnWho[0].innerHTML = "X";
        turnWho[1].innerHTML = "X"
    }
    return who;
}

var checkIf = function (list, checks) {
  // console.log("in check if");
  for (var i = 0; i < checks.length; i++) {
    // console.log("Hi");
    var tempBool = false;
    for (var j = 0; j < list.length; j++) {
      // console.log("j");
      console.log((checks[i]).toString(), (list[j]).toString());
      if (checks[i].toString() === list[j].toString()) {
        console.log("Really!!!");
        tempBool = true;
        console.log("here");
        break;
      }
    }
    if (!tempBool) {
      return false;
    }
  }
  console.log("after for");

  return true;
};

var winCheck = function (symb) {
  var locs = [];
  var winCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]];
  for (var i = 0; i < spotNodes.length; i++) {
    if (spotNodes[i].innerHTML === symb) {
      locs.push(spotNodes[i].id);
    }
  }
  var won = false;
  for (var i = 0; i < winCombos.length; i++) {
    if (checkIf(locs, winCombos[i])) {
      won = true;
      break;
    }
  }
  if (won) {
    alert(`${symb} WON!!!!!!!!`);
    return;
  } else {
    return;
  }
};