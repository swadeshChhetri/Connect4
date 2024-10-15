 /*
    !How You can Create a 4Connect Game ?? 
***********************************************

    Step1 : 2player -> StartingPlayer -> board -> row&column -> CurrentColumn ;(Psychology)
    
    Step2 : Create 4function (logically)--> 
            GameSetting(setGame()), PlacingPiece(setPiece()), WinLogic(checkWinner()), FindWinner(setWinner(r,c)) ;
          
    Step3 : GameSetting(setGame())--> board[], currentColumn[] & Logic()

    step 4 : PlacingPiece(setPiece())--> 
             1. Clicked column & row suppose (0-1) & Store in r & c variable;
             2. placed the piece at the last row; r=currColumn[5,5,5,5,5,5,5]
             3. put the player at the selected or clicked row;
             4. retrive the element by selecting Id
             5. And check which player is it? set the class according to the player.
                and set the currPlayer to another one.
             6. reduce the row by one
             7. set the reduce row in currColumn;
             8. call the checkWinner() when winning condition is meet.

    step 5 : WinLogic(checkWinner())-->
             1. Horizontal
                1. run a for loop entire the row
                   1. run another loop to ensure column should be less then 4
                      1. if you do not find empty value then execute code... 
                         1. row0column0 + rowcolumn1 + rowcolumn2 + rowcolumn3;
                           1. call the setWinner(r, c);
                           2. return

             2. Vertical
               1. run a for loop entire the row
                   1. run another loop to ensure column should be less then 4
                      1. if you do not find empty value then execute code... 
                         1. row1column + row2column + row3column + row4column
                           1. call the setWinner(r, c);
                           2. return


             3. Anti Diagonal
              1. run a for loop entire the row
                  1. run another loop to ensure column should be less then 4
                      1. if you do not find empty value then execute code... 
                        1. row0column0 + row1column1 + row2column2 + row3column3
                          1. call the setWinner(r, c);
                          2. return

             4. Diagonal
              1. run a for loop entire the row
                    1. run another loop to ensure column should be less then 4
                        1. if you do not find empty value then execute code... 
                          1. row0column0 + row-1column1 + row-2column2 + row-3column3 
                           1. call the setWinner(r, c);
                           2. return

    Step 6 : FindWinner(setWinner(r,c))-->
             1. retrive the element by selecting id ("winner");
             2. if board[raw][column] = playerRed then winner.innerText = "Red Wins";
                else winner.innerText = "Yellow Wins";
             3. gameOver=true;


=================================================================================================================

   here first I took two player playerRed & playerYellow which is represented by "R" and "Y";
   first player will be playerRed;
   first I define a board it's mean game board;
   and this board have 6 rows and 7 columns take a look here --design.
   and currColumns initialize with blank array it will help us to place the pieces at the end.

   It's mean when window is fully loaded then the code will be executed.

   In this code snippet what I did first initialize board with the black array for adding columns and rows.
   currColums , I told you it would help us to placed the pices at the end I took here 7 columns  this elements is represented last position and before set up first it will clear the previous board with the help of innerHTML.

   then simplily I ran a loop iterate over the numbers of rows then initialize with the blank array it will the the array in all rows. then again I ran the loop through the columns and add empty string each columns;

   then I created div element which is represented by tile and add id , this syntex will help us to manage row and colums by adding column & row numbers then I add class with the help of classList as well as I added click event each tile. and at the end I added it to the board talking help of append method.

   thell all things push to the board .


   and I added here one feature which is help us to reset the game.

   How I set the piece in the board it will describe about it.
   it's mean when game is over it will return from the code other wise it will execute futher process like first I split the id help of this("-")seprator; and I converted them into integers value this value appers according to the click event.

   if c value is 1 it I assing value 5 to the row and if r is less then 0 simply return if false then selected column and row add the currPlayer and again I retrived the element with the help of id and if currplayer is playerRed? add class(which is red piece) if false the add yello piece and change the player;


   and next this function check the who is win the game:
   first, I checked horizontally so I ran a loop in numbers of rows and ran a loop in column as well to ensure that column should not be cross the column four and if columns and rows are not to empty the it will check by increasing columns.

   and pass the row and column as a arguments then and it will check by increasing row, actually it's checking vertically.

   and this function stand for checking anti diagonal by increasing both columns and rows.
   and this function check diagonaly by reducing number of row and increasing columns;

   and at the end , ummm this is a last function it will define the win player, first it will selecte the html element by the Id and if board[r][c] = playerRed ten the value "Red Wins" and I sat the winner color is Red if not true set the value Yellow wins! and color will be yellow;
   and finally gameOver is = ture;


=====================================================================================================
![HTML]

In html, I created  a reset button and 2 container board and dispay winner player.

![JavaScript]
   First, I defined two players: playerRed and playerYellow, represented by "R" and "Y" respectively. The game starts with playerRed as the current player. I also defined the game board (board), which has 6 rows and 7 columns.

   I initialized currColumns with [5, 5, 5, 5, 5, 5, 5]. This array keeps track of the last available row in each column. When a piece is placed, the value for that column is reduced, so we know where to place the next piece.

   When the window is fully loaded, the setGame() function is executed to initialize the board.

   Setting Up the Board:
   First, the board is initialized as an empty array to hold the state of each tile (empty or filled with a player's piece).
   //?<--- Style for the board---->
   currColumns is reset to [5, 5, 5, 5, 5, 5, 5], meaning that each column starts with its last row (index 5).
   The board's HTML is cleared with innerHTML = "" to reset the visual display.
   I then looped through the rows and columns:

   Each row is represented as an array, where I add empty strings to represent empty tiles.
   //?<-- Style for the tiles -->
   For each tile, I created a div element with an id that combines the row and column number (e.g., "0-0" for the first tile), and I added the class tile. An event listener is attached to each tile, so when it's clicked, the setPiece() function runs.
   After setting up the board visually and in code, I also added a reset feature. The reset button calls setGame() to restart the game and clear the board.
   //?<-- Style for the Reset Button -->

   Piece Placement:
   In the setPiece() function:
   //?<-- Style for the picess -->
   If the game is over, it returns early and prevents any further moves.
   It retrieves the row (r) and column (c) from the tile's id (split using the "-" separator).
   r is updated to the value of currColumns[c], which represents the next available row in that column.
   If r is less than 0 (meaning the column is full), the function returns without placing a piece.
   Otherwise, the tile in the current column and row is filled with the current player's piece (currPlayer). If currPlayer is playerRed, a red piece is added, and the player switches to playerYellow, and vice versa.
   Finally, I decrement the row value in currColumns to track where the next piece will go in that column, and then I check if there's a winner.

   Checking for a Winner:
   //?<-- Style for the Winner -->
   The checkWinner() function looks for four consecutive pieces in several directions:

   Horizontally: It loops through rows and checks if four pieces in a row match.
   Vertically: It loops through columns and checks if four pieces in a column match.
   Anti-diagonally: It checks for a sequence of four pieces that form a downward-sloping diagonal from left to right.
   Diagonally: It checks for an upward-sloping diagonal from left to right.
   If any of these conditions are met, the setWinner() function is called.

   Declaring the Winner:
   In the setWinner() function:

   I check which player (playerRed or playerYellow) won based on the board[r][c] value.
   If the winning player is playerRed, the message "Red Wins!" is displayed in red text. If it's playerYellow, the message "Yellow Wins!" is displayed in yellow.
   The game is then marked as over by setting gameOver = true.


   



















 
 
 
 
 
 
 
 
 
 
 
 */