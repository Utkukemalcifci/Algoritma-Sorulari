const myFunction = (myArray) => {
  resultMultiply = 1;
  myNewArray = [];

  myArray.forEach(each => {
    resultMultiply *= each;
  });
  myArray.forEach(e => {
    myNewArray.push(resultMultiply / e);
  })
  console.log(myNewArray);
  
}

myFunction([1,2,3,4,5,6]);