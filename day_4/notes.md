Find all instances of the string "XMAS" in a 2D array (i.e. matrix).

1. Traverse the matrix left to right, top to bottom ([0,0][0,1][0,2][0,3])
2. When you find an "X", check surrounding cells for an "M". The cells to be checked will be:

[TL] [U] [TR]

[L ] [X] [ R]

[BL] [D] [BR]

- left: [x,y-1]
- right: [x, y+1]
- up: [x-1, y]
- down: [x+1, y]
- top-left: [x-1, y-1]
- top-right: [x-1, y+1]
- bottom-left: [x+1,y-1]
- bottom-right: [x+1,y+1]

Search algorithm

Starting at LETTER, check if LETTER[TL] === target_letter.
IF it is
START at NEXT LETTER
