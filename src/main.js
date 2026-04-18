// creates the graph of true or falses that makes the cave
function getRandomInteger(min, max) 
{
  min = Math.ceil(min); // Ensure min is a whole number (rounds up)
  max = Math.floor(max); // Ensure max is a whole number (rounds down)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(array) 
{
  for (let i = array.length - 1; i > 0; i--) {
    const h = Math.floor(Math.random() * (i + 1));
    [array[i], array[h]] = [array[h], array[i]];
  }
  return array;
}
let mazeSize = 400;
let mazeX = 33;
let mazeY = mazeX;
let mazeArray = [];
let mazeWalker = [0,0]
let openSpace = [];
let direction;
let possPath = [[0,0]];

function mazeMaker()
{
  for (let i = 0; i < mazeX; i++) 
  {
    mazeArray[i] = [];
    for (let j = 0; j < mazeY; j++) 
    {
      mazeArray[i][j] = false;
    }
  }
}
function mazeEater()
{
  if (mazeArray[mazeWalker[0]][mazeWalker[1]] === false)
    {
      mazeArray[mazeWalker[0]][mazeWalker[1]] = true;
    }
  openSpace = [];
  //left
  if (mazeWalker[0] != 0)
    {
      if (mazeArray[mazeWalker[0]-2][mazeWalker[1]] === false)
        {
          append(openSpace, 4)
        } 
    }
  //right
  if (mazeWalker[0] != mazeX - 1)
    {
      if (mazeArray[mazeWalker[0]+2][mazeWalker[1]] === false)
        {
          append(openSpace, 2)
        }
    }
  //up
  if (mazeWalker[1] != 0)
    {
      if (mazeArray[mazeWalker[0]][mazeWalker[1]-2] === false)
        {
          append(openSpace, 1)
        }
    }
  //down
  if (mazeWalker[1] != mazeY - 1)
    {
      if (mazeArray[mazeWalker[0]][mazeWalker[1]+2] === false)
        {
          append(openSpace, 3)
        }
    }
  if (openSpace != []) 
    {
    direction = openSpace[getRandomInteger(0,openSpace.length)]
    if (direction === 1)
      {
      if (openSpace.length > 1) 
      {
        append(possPath, [mazeWalker[0],mazeWalker[1]])
      }
      mazeArray[mazeWalker[0]][mazeWalker[1]-1] = true
      mazeWalker = [mazeWalker[0],mazeWalker[1]-2]
      }
    if (direction === 2)
      {
      if (openSpace.length > 1) 
      {
        append(possPath, [mazeWalker[0],mazeWalker[1]])
      }
      mazeArray[mazeWalker[0]+1][mazeWalker[1]] = true
      mazeWalker = [mazeWalker[0]+2,mazeWalker[1]]
      }
    if (direction === 3)
      {
      if (openSpace.length > 1) 
      {
        append(possPath, [mazeWalker[0],mazeWalker[1]])
      }
      mazeArray[mazeWalker[0]][mazeWalker[1]+1] = true
      mazeWalker = [mazeWalker[0],mazeWalker[1]+2]
      }
    if (direction === 4)
      {
      if (openSpace.length > 1) 
      {
        append(possPath, [mazeWalker[0],mazeWalker[1]])
      }
      mazeArray[mazeWalker[0]-1][mazeWalker[1]] = true
      mazeWalker = [mazeWalker[0]-2,mazeWalker[1]]
      }
    }
  if (openSpace.length === 0) 
    {
      if (possPath.length != 0)
          {
            possPath = shuffleArray(possPath);
            mazeWalker = [possPath[possPath.length-1][0], possPath[possPath.length-1][1]]
            shorten(possPath)
          }
    }
}
// ------------------------------------------------------
