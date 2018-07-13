<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Chess Application</title>
</head>
<body>
  <style media="screen">
  #mainChessBoard
  {
    width:32.1em;
    height:32.1em;
    border:1px solid black;
  }

  div
  {
    width:4em;
    height:4em;
    float:left;
    text-align: center;
    border:0.1px solid #efeded;
  }

  /*
  ^= is starts with
  $= is ends with
  =  is exactly equal
  != is not equal
  *= is contains
  */

  div[class*=" source active"]
  {
    border:0.1px solid #00ff5d;
  }

  div[class*=" destination active"]
  {
    border:0.1px solid red;
  }


  </style>

  <div id="mainChessBoard">
  </div>

  <script>

  var pieces = {
    NONE: {
      name: "None",
      colorCode: " ",
      code:" "
    },
    WHITE_KING: {
      name: "White King",
      colorCode: "\u2654",
      code:6
    },
    WHITE_QUEEN: {
      name: "White Queen",
      colorCode: "\u2655",
      code:5
    },
    WHITE_ROOK: {
      name: "White Rook",
      colorCode: "\u2656",
      code:4
    },
    WHITE_BISHOP: {
      name: "White Bishop",
      colorCode: "\u2657",
      code:3
    },
    WHITE_KNIGHT: {
      name: "White Knight",
      colorCode: "\u2658",
      code:2
    },
    WHITE_POWN: {
      name: "White Pown",
      colorCode: "\u2659",
      code:1
    },
    BLACK_KING: {
      name: "Black King",
      colorCode: "\u265A",
      code:-6
    },
    BLACK_QUEEN: {
      name: "Black Queen",
      colorCode: "\u265B",
      code:-5
    },
    BLACK_ROOK: {
      name: "Black Rook",
      colorCode: "\u265C",
      code:-4
    },
    BLACK_BISHOP: {
      name: "Black Bishop",
      colorCode: "\u265D",
      code:-3
    },
    BLACK_KNIGHT: {
      name: "Black Knight",
      colorCode: "\u265E",
      code:-2
    },
    BLACK_POWN: {
      name: "Black Pown",
      colorCode: "\u265F",
      code:-1
    },
  };

  var board = [];
  var moves=[];
  var boardDimension = 8;
  var counter=0;

  for (var i = 0; i < boardDimension * boardDimension; i++) {
    board.push({
      x: i % boardDimension,
      y: Math.floor(i / boardDimension),
      piece: pieces.NONE
    });
  };

  board[0].piece = pieces.BLACK_ROOK
  board[1].piece = pieces.BLACK_KNIGHT
  board[2].piece = pieces.BLACK_BISHOP
  board[3].piece = pieces.BLACK_QUEEN
  board[4].piece = pieces.BLACK_KING
  board[5].piece = pieces.BLACK_BISHOP
  board[6].piece = pieces.BLACK_KNIGHT
  board[7].piece = pieces.BLACK_ROOK

  board[8].piece = pieces.BLACK_POWN
  board[9].piece = pieces.BLACK_POWN
  board[10].piece = pieces.BLACK_POWN
  board[11].piece = pieces.BLACK_POWN
  board[12].piece = pieces.BLACK_POWN
  board[13].piece = pieces.BLACK_POWN
  board[14].piece = pieces.BLACK_POWN
  board[15].piece = pieces.BLACK_POWN

  board[6 * 8 + 0].piece = pieces.WHITE_POWN
  board[6 * 8 + 1].piece = pieces.WHITE_POWN
  board[6 * 8 + 2].piece = pieces.WHITE_POWN
  board[6 * 8 + 3].piece = pieces.WHITE_POWN
  board[6 * 8 + 4].piece = pieces.WHITE_POWN
  board[6 * 8 + 5].piece = pieces.WHITE_POWN
  board[6 * 8 + 6].piece = pieces.WHITE_POWN
  board[6 * 8 + 7].piece = pieces.WHITE_POWN

  board[7 * 8 + 0].piece = pieces.WHITE_ROOK
  board[7 * 8 + 1].piece = pieces.WHITE_KNIGHT
  board[7 * 8 + 2].piece = pieces.WHITE_BISHOP
  board[7 * 8 + 3].piece = pieces.WHITE_QUEEN
  board[7 * 8 + 4].piece = pieces.WHITE_KING
  board[7 * 8 + 5].piece = pieces.WHITE_BISHOP
  board[7 * 8 + 6].piece = pieces.WHITE_KNIGHT
  board[7 * 8 + 7].piece = pieces.WHITE_ROOK

  for (var i=0; i< 64; i++){
    var newNode =  document.createElement("div");
    var color = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
    document.getElementById("mainChessBoard").appendChild(newNode).style.backgroundColor = color;

    newNode.innerHTML=board[i].piece.colorCode;
    newNode.className=color;
    newNode.id=i;
    newNode.setAttribute("data-row",(parseInt(i/8)+1));
    newNode.setAttribute("data-column",(i % 8)+1);
    newNode.addEventListener("click",gatherDetails,false);

  }


  function gatherDetails()
  {
    if(counter==0 && board[event.target.id].piece.code!=" ")
    {
      moves[counter]=board[event.target.id];
      event.target.className += " source active";
      counter++;
    }
    else if(counter==1)
    {
      moves[counter]=board[event.target.id];
      event.target.className += " destination active";
      counter=0;
      movePiece(moves);
    }

  }

  function movePiece(eleArray)
  {
    var divs = document.getElementsByClassName("active");
    console.log(divs);
    alert(divs.length);
    alert(divs[0].className);
    for (var i = 0; i < divs.length; i++) {
      divs[i].className = divs[i].className.replace(" source active","");
      divs[i].className = divs[i].className.replace(" destination active","");
    }
  }

  </script>

</body>
</html>
