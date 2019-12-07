  const winConditions = [7,56,73,84,146,273,292,448]; 
  var scores = [0,0];
  var player=[];
  player[0] = "Player 1";
  player[1] = "Player 2";
  var marker=["X", "O"];
  var playerTurn = 0;
  var gameOver = false;

  
  function play(clickedDiv, divPoints) {
     points(divPoints);
      if (!gameOver)
      {
      clickedDiv.onclick=""; 
    clickedDiv.innerHTML = "<span>" + marker[playerTurn] + "<span>"; 
    if (marker[playerTurn] === "X") // Styling for player 1 and player 2
    {
    clickedDiv.style.color = "#0B5351";
    clickedDiv.style.textShadow = "-1px -1px 0 #00A9A5, 1px -1px 0 #00A9A5,-1px 1px 0 #00A9A5,1px 1px 0 #00A9A5";
    }
    else if (marker[playerTurn] === "O") {
        clickedDiv.style.color = "#90C2E7";
        clickedDiv.style.textShadow = "-1px -1px 0 #4E8098, 1px -1px 0 #4E8098,-1px 1px 0 #4E8098,1px 1px 0 #4E8098";    }
    winCheck();
    click(); 
  }
}
  function click() {
if (playerTurn == 0) {
    playerTurn = 1;
}
else {
    playerTurn = 0;
}
document.getElementById('game-info').innerText = player[playerTurn] + "'s Turn (" + marker[playerTurn] + ')';
  }
  function points(playerPoints) {
      scores[playerTurn] += playerPoints;
  }
  function winCheck() {
    for (i=0; i < winConditions.length;i++)
    {
        if((winConditions[i] & scores[playerTurn]) == winConditions[i])
        {
            gameOver=true;
        alert (player[playerTurn] + " Wins!");
        document.getElementById('game-info').innerText = player[playerTurn] + "Wins!";
        }
    }
    if (((scores[0] + scores[1]) == 511) & !gameOver)
    {
        alert ('Tie Game!');
        document.getElementById('game-info').innerText = "Tie Game!";
  
    }
} 