<html>
<body>
  <title>ChessBoard Game</title>
  <h1>Welcome to Chessboard</h1>

  <style>
  table.chessboardTable{
    background-color: lavenderblush;
    border-width:0.2em;
    border-style: solid;

  }
  td.nodeProperties{
    width: 4em;
    text-align: center;
    height: 4em;
    font-size: 100px;

  }
  th.ColumnReferenceProperties{
    width: 4em;
    height: 1em;
  }
  td.RowReferenceProperties{
    width: 1em;
    height: 4em;
  }


  td.grey{
    background-color:grey;
    text-align: center;
    width:5em;
    height:5em;

  }
  td.white{
    background-color:white;
    text-align: center;
    width:5em;
    height:5em;
  }

  .selected{
    background-color:yellow;
  }


  .wrap {
    width: 100%;
  }
  .floatleft {
    float:left;
    width: 50%;
  }

  .floatright {
    float: right;
    width: 50%;
  }

  </style>

  <script>

  function moveState(){
    var sourceLocation = document.getElementById("source").value;
    var sourceValue = document.getElementById(sourceLocation).innerHTML;
    document.getElementById(sourceLocation).innerHTML="";
    var destLocation = document .getElementById("destination").value;
    document.getElementById(destLocation).innerHTML=sourceValue;
  }

  function nextchar(c){
    return String.fromCharCode(c.charCodeAt(0)+1);
  }

  function fillboard(initFlag,reloadFlag){
    var board=initializeBoard();
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if(board[i][j].includes("#")){
          document.getElementById("h"+getElementReference(j,i)).innerHTML=board[i][j];
        }
      }
    }
  }

  function getElementReference(j,i){
    var defaultMapping={0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h"};
    return defaultMapping[j]+(i+1)
  }

  function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
      array.push(dimensions.length == 1 ? "" : zeros(dimensions.slice(1)));
    }

    return array;
  }

  function test()
  {
    //event.target.css({ 'backgroundColor': '#F00', 'color': '#FFF' });
    alert(event.target.id);
    alert(event.target.attributes.getNamedItem('data-row').value);
    alert(event.target.attributes.getNamedItem('data-column').value);
  }

  function initializeBoard(){

    var board=zeros([8, 8]);
    // Rooks
    board [0][0] = "&#9814;";
    board [0][7] = "&#9814;";
    board [7][0] = "&#9820;";
    board [7][7] = "&#9820;";

    // Knights
    board [0][1] = "&#9816;";
    board [0][6] = "&#9816;";
    board [7][1] = "&#9822;";
    board [7][6] = "&#9822;";

    //Bishops
    board [0][2] = "&#9815;";
    board [0][5] = "&#9815;";
    board [7][2] = "&#9821;";
    board [7][5] = "&#9821;";

    //Queens
    board [0][3] = "&#9813;";
    board [7][3] = "&#9819;";

    //Kings
    board [0][4] = "&#9812;";
    board [7][4] = "&#9818;";

    //Pawns
    for (var i = 0; i < 8; i++) {
      board[1][i] = "&#9817;";
      board[6][i] = "&#9823;";
    }
    return board;
  }


</script>
<div class="wrap">
  <div class="floatleft">
    <table id="chessboard" class="chessboardTable">
      <thead id="thead1">
        <script>
        let i=1;
        var column = 'a';
        var cornerHeader = document.createElement("th");
        document.getElementById("thead1").appendChild(cornerHeader);
        do{
          var newHeader = document.createElement("th");
          newHeader.id='th'+i;
          newHeader.innerHTML=column;
          document.getElementById("thead1").appendChild(newHeader);
          newHeader.className="ColumnReferenceProperties";
          column=nextchar(column);
          i++;
        }while(i<=8)
        var cornerHeader = document.createElement("th");
        document.getElementById("thead1").appendChild(cornerHeader);
        </script>
      </thead>
      <script>
      var data = 0;
      for(let x=1;x<9;x++)
      {
        var newRow = document.createElement("tr");
        newRow.id="tr"+x;
        document.getElementById("chessboard").appendChild(newRow);
        var newRowDisplayCell = document.createElement("td");
        document.getElementById("tr"+x).appendChild(newRowDisplayCell);
        newRowDisplayCell.className = "RowReferenceProperties";
        newRowDisplayCell.innerHTML=x;
        for(var file = 'a'; file <='h';file=nextchar(file))
        {
          var newNode = document.createElement("td")
          newNode.id=file +x;
          newNode.addEventListener("click",test,false);
          document.getElementById(newRow.id).appendChild(newNode);
          var newNodeSize = document.createElement("h1");
          newNodeSize.id="h"+file +x;
          newNodeSize.setAttribute("data-row",x);
          newNodeSize.setAttribute("data-column",file);
          document.getElementById(newNode.id).appendChild(newNodeSize);

          if(x%2==0)
          {
            if(file.charCodeAt(0)%2!=0)
            newNode.className="grey";
            else {
              newNode.className="white";
            }
          }
          else {
            if(file.charCodeAt(0)%2!=0)
            newNode.className="white";
            else {
              newNode.className="grey";
            }
          }
        }
        newRowDisplayCell = document.createElement("td");
        document.getElementById("tr"+x).appendChild(newRowDisplayCell);
        newRowDisplayCell.className = "RowReferenceProperties";
        newRowDisplayCell.innerHTML=x;
      }
      </script>

      <tr id="thead2">
        <script>
        let j=1;
        var column = 'a';
        var cornerHeader = document.createElement("th");
        document.getElementById("chessboard").appendChild(cornerHeader);
        do{
          var newHeader = document.createElement("th");
          newHeader.id='thf'+j;
          newHeader.innerHTML=column;
          document.getElementById("chessboard").appendChild(newHeader);
          newHeader.className="ColumnReferenceProperties";
          column=nextchar(column);
          j++;
        }while(j<=8)
        </script>

      </tr>
    </table>
  </div>
  <div class="floatright">

    <table>
      <tr>
        <td>Source : </td>
        <td colspan="2"><input id = "source" type="text" name="piece"></td>
      </td>
    </tr>
    <tr>
      <td>Destination : </td>
      <td colspan="2"><input id = "destination" type="text" name="location"><br></td>
    </td>
  </tr>
  <tr>
    <td>
      <button onclick="moveState()">Change State</button>
    </td>
    <td>
      <button onclick="fillboard()">Initialize Board</button>
    </td>
    <td>
      <button onclick="Clear Field()">Clear Field</button>
    </td>
  </tr>
</table>

</div>




</body>
</html>
