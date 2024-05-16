const parseCode = (str) => {
  // your code here
  
  let splitParts = str.split('0');
  
  let allParts = splitParts.filter(parts => parts !=='');
  
  return {
      firstName: allParts[0],
      lastName: allParts[1],
      id: allParts[2]
  };
  
}

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
