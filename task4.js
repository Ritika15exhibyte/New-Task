const matrix = [
    [2, 3, 2],
    [1, 1, 1],
    [1, 1, 1],
    [4, 5, 4],
  ];
  //path direction
  let directions =
   {
    0: [1, 3],
    1: [2, 4],
    2: [1, 4],
    3: [3, 4],
    4: [2, 3],
    5: [1, 2]
   }
  
 function getnextPosition(i, j, lastPosition) 
 {
  
    const matrixValue = matrix[i][j];
    console.log(i, j);
    console.log("matrixValue", matrixValue);
  
    const edge = directions[matrixValue];
    console.log("edge", edge);
  
    console.log("connection[lastPosition]", connection[lastPosition]);
  
    const startIndex = edge.indexOf(connection[lastPosition]);
    console.log("startIndex", startIndex);
  
    if (startIndex < 0)
     {
      return false;
    }
  

    const endEdge = edge[startIndex == 0 ? 1 : 0];
    console.log("endEdge", endEdge);
  
    
    if (i === matrix.length - 1 || j === matrix[0].length - 1) 
    {
      if (endEdge == 3) {
        return true;
      }
      else 
      {
        return false;
      }
    }
  
  
    if (endEdge == 1)
     {
      return getnextPosition(i, j - 1, 1)
    }
    if (endEdge == 2)
     {
      return getnextPosition(i - 1, j, 2)
    }
    if (endEdge == 3)
    {
      return getnextPosition(i, j + 1, 3)
    }
    if (endEdge == 4)
     {
      return getnextPosition(i + 1, j, 4)
    }
  
  }
  
  
  const connection = {
    1: 3,
    2: 4,
    3: 1,
    4: 2
  }
  console.log(getnextPosition(0, 0, 3));
  
