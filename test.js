//Valid and invalid puzzles for testing
let validTestData = [
  [3, 2, 7, 1, 5, 8, 9, 4, 6],
  [6, 1, 9, 4, 3, 7, 5, 8, 2],
  [5, 4, 8, 9, 6, 2, 7, 1, 3],
  [1, 8, 6, 5, 7, 4, 3, 2, 9],
  [4, 3, 2, 6, 8, 9, 1, 5, 7],
  [9, 7, 5, 3, 2, 1, 4, 6, 8],
  [7, 6, 4, 2, 1, 3, 8, 9, 5],
  [8, 5, 1, 7, 9, 6, 2, 3, 4],
  [2, 9, 3, 8, 4, 5, 6, 7, 1],
];
let invalidTestData = [
  [2, 3, 7, 1, 5, 8, 9, 4, 6],
  [6, 6, 9, 4, 3, 7, 5, 8, 2],
  [5, 4, 8, 9, 6, 2, 7, 1, 3],
  [1, 8, 6, 5, 7, 4, 3, 2, 9],
  [4, 3, 2, 6, 9, 9, 1, 5, 7],
  [9, 7, 5, 3, 2, 1, 4, 6, 8],
  [7, 6, 4, 2, 1, 3, 8, 9, 5],
  [8, 5, 1, 7, 9, 6, 2, 3, 4],
  [3, 9, 3, 8, 4, 5, 6, 7, 1],
];

const tableSize = 9;
const squareSize = 3;

//initialize error boolean
let hasError = false;

//function to test each row for duplicates
const testRows = (testData) => {
  for (let i = 0; i < tableSize; i++) {
    let row = [];
    for (let j = 0; j < tableSize; j++) {
      row.push(testData[i][j]);
    }
    checkData(row);
  }
};

//function to test each column for duplicates
const testColumns = (testData) => {
  for (let i = 0; i < tableSize; i++) {
    let column = [];
    for (let j = 0; j < tableSize; j++) {
      column.push(testData[j][i]);
    }
    checkData(column);
  }
};

//function to group 3x3 squares to check
const testSquares = (testData) => {
  let rowShift = 0;
  let columnShift = 0;

  for (let h = 0; h < tableSize; h++) {
    let square = [];
    if (h % squareSize == 0 && h != 0) {
      rowShift += squareSize;
      columnShift = 0;
    }

    for (let i = 0; i < squareSize; i++) {
      for (let j = 0; j < squareSize; j++) {
        square.push(testData[i + rowShift][j + columnShift]);
      }
    }
    checkData(square);
    columnShift += squareSize;
  }
};

//function to check all data
const checkData = (data) => {
  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (data[i] === data[j]) {
        console.log('error');
        return (hasError = true);
      }
    }
  }
};

const sudokuTest = (testData) => {
  testRows(testData);
  testColumns(testData);
  testSquares(testData);
  console.log(`Has error: ${hasError}`);
};

sudokuTest(validTestData);
