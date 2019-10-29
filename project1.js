function DropToken(column) {
  var possibleWins = [
    //Horizontal Lines of 3
    ["A1", "B1", "C1", "D1"], ["B1", "C1", "D1", "E1"], ["C1", "D1", "E1", "F1"], ["D1", "E1", "F1", "G1"],
    ["A2", "B2", "C2", "D2"], ["B2", "C2", "D2", "E2"], ["C2", "D2", "E2", "F2"], ["D2", "E2", "F2", "G2"],
    ["A3", "B3", "C3", "D3"], ["B3", "C3", "D3", "E3"], ["C3", "D3", "E3", "F3"], ["D3", "E3", "F3", "G3"],
    ["A4", "B4", "C4", "D4"], ["B4", "C4", "D4", "E4"], ["C4", "D4", "E4", "F4"], ["D4", "E4", "F4", "G4"],
    ["A5", "B5", "C5", "D5"], ["B5", "C5", "D5", "E5"], ["C5", "D5", "E5", "F5"], ["D5", "E5", "F5", "G5"],
    ["A6", "B6", "C6", "D6"], ["B6", "C6", "D6", "E6"], ["C6", "D6", "E6", "F6"], ["D6", "E6", "F6", "G6"],
    ["A7", "B7", "C7", "D7"], ["B7", "C7", "D7", "E7"], ["C7", "D7", "E7", "F7"], ["D7", "E7", "F7", "G7"],

    //Vertical Lines of 3
    ["A1", "A2", "A3", "A4"], ["A2", "A3", "A4", "A5"], ["A3", "A4", "A5", "A6"], ["A4", "A5", "A6", "A7"],
    ["B1", "B2", "B3", "B4"], ["B2", "B3", "B4", "B5"], ["B3", "B4", "B5", "B6"], ["B4", "B5", "B6", "B7"],
    ["C1", "C2", "C3", "C4"], ["C2", "C3", "C4", "C5"], ["C3", "C4", "C5", "C6"], ["C4", "C5", "C6", "C7"],
    ["D1", "D2", "D3", "D4"], ["D2", "D3", "D4", "D5"], ["D3", "D4", "D5", "D6"], ["D4", "D5", "D6", "D7"],
    ["E1", "E2", "E3", "E4"], ["E2", "E3", "E4", "E5"], ["E3", "E4", "E5", "E6"], ["E4", "E5", "E6", "E7"],
    ["F1", "F2", "F3", "F4"], ["F2", "F3", "F4", "F5"], ["F3", "F4", "F5", "F6"], ["F4", "F5", "F6", "F7"],
    ["G1", "G2", "G3", "G4"], ["G2", "G3", "G4", "G5"], ["G3", "G4", "G5", "G6"], ["G4", "G5", "G6", "G7"],

    //Diagonal lines of 3
    //Bottom Left to Top Right, Ascending
    ["A1", "B2", "C3", "D4"], ["A2", "B3", "C4", "D5"], ["A3", "B4", "C5", "D6"], ["A4", "B5", "C6", "D7"],
    ["B1", "C2", "D3", "E4"], ["B2", "C3", "D4", "E5"], ["B3", "C4", "D5", "E6"], ["B4", "C5", "D6", "E7"],
    ["C1", "D2", "E3", "F4"], ["C2", "D3", "E4", "F5"], ["C3", "D4", "E5", "F6"], ["C4", "D5", "E6", "F7"],
    ["D1", "E2", "F3", "G4"], ["D2", "E3", "F4", "G5"], ["D3", "E4", "F5", "G6"], ["D4", "E5", "F6", "G7"],


    //Bottom Right to Top Left, Ascending
    ["A7", "B6", "C5", "D4"], ["A6", "B5", "C4", "D3"], ["A5", "B4", "C3", "D2"], ["A4", "B3", "C2", "D1"],
    ["B7", "C6", "D5", "E4"], ["B6", "C5", "D4", "E3"], ["B5", "C4", "D3", "E2"], ["B4", "C3", "D2", "E1"],
    ["C7", "D6", "E5", "F4"], ["C6", "D5", "E4", "F3"], ["C5", "D4", "E3", "F2"], ["C4", "D3", "E2", "F1"],
    ["D7", "E6", "F5", "G4"], ["D6", "E5", "F4", "G3"], ["D5", "E4", "F3", "G2"], ["D4", "E3", "F2", "G1"]
  ];

  let color = "";

  if ( document.getElementById(column + "1").style.backgroundColor != "red" &&
       document.getElementById(column + "1").style.backgroundColor != "black" ) {
      PlayerClaim(1);
  } else if ( document.getElementById(column + "2").style.backgroundColor != "red" &&
       document.getElementById(column + "2").style.backgroundColor != "black" ) {
      PlayerClaim(2);
  } else if ( document.getElementById(column + "3").style.backgroundColor != "red" &&
       document.getElementById(column + "3").style.backgroundColor != "black" ) {
      PlayerClaim(3);
  } else if ( document.getElementById(column + "4").style.backgroundColor != "red" &&
       document.getElementById(column + "4").style.backgroundColor != "black" ) {
      PlayerClaim(4);
  } else if ( document.getElementById(column + "5").style.backgroundColor != "red" &&
       document.getElementById(column + "5").style.backgroundColor != "black" ) {
      PlayerClaim(5);
  } else if ( document.getElementById(column + "6").style.backgroundColor != "red" &&
       document.getElementById(column + "6").style.backgroundColor != "black" ) {
      PlayerClaim(6);
  } else if ( document.getElementById(column + "7").style.backgroundColor != "red" &&
       document.getElementById(column + "7").style.backgroundColor != "black" ) {
      PlayerClaim(7);
  }

  if (checkForWinner()) {
    if (color == "red") {
      document.getElementById("Player Turn").innerHTML = "Red Player Wins!";
    } else if (color == "black") {
      document.getElementById("Player Turn").innerHTML = "Black Player Wins!";
    }
  }

  function PlayerClaim(row) {
    let playerTurn = document.getElementById("Player Turn").textContent;

    if (playerTurn == "Red Player's Turn!") {
      document.getElementById("" + column + row).style.backgroundColor = "red";
      chalk.println("" + column + row + ": " + document.getElementById("" + column + row).style.backgroundColor);
      document.getElementById("Player Turn").innerHTML = "Black Player's Turn!";
      color = "red";
    } else if (playerTurn == "Black Player's Turn!") {
      document.getElementById("" + column + row).style.backgroundColor = "black";
      chalk.println("" + column + row + ": " + document.getElementById("" + column + row).style.backgroundColor);
      document.getElementById("Player Turn").innerHTML = "Red Player's Turn!";
      color = "black";
    }
  }

  function checkForWinner() {
    let winner = false;
    for (let i = 0; i < possibleWins.length; i++) {
      let message = "" + possibleWins[i][0] + ", ";
      for (let j = 0; j < possibleWins[i].length - 1; j++) {
        if(document.getElementById("" + possibleWins[i][j]).style.backgroundColor == document.getElementById("" + possibleWins[i][j + 1]).style.backgroundColor) {
          winner = true;
          message = message + possibleWins[i][j + 1];
          if(j + 1 < possibleWins[i].length - 1) {
            message = message + ", ";
          }
        } else {
          winner = false;
          break;
        }
      }
      if (winner) {
        chalk.println(color + " Color Match at: " + message);
        break;
      }
    }
    return winner;
  }
}
