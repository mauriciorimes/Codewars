// Check to see if a string has the same amount of 'x's and 'o's. The method must
// return a boolean and be case insensitive. The string can contain any char.

function XO(str) {  
  let contaX = 0;
  let contaO = 0;

  for (let i = 0; i < str.length; i++) {
  if (str[i] === 'x' || str[i] === "X") contaX += 1;   
  if (str[i] === 'o' || str[i] === 'O') contaO += 1;
}

return contaX === contaO
}


