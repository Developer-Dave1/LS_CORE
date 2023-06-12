function rotateArray(array) {
  if (array === []) {
    return [];
  } 

  let newArray = [];
  let copyArr = array.slice();
  let firstElement = copyArr[0]; 
  let lastElement = copyArr.slice().pop();
  let middleElement = copyArr.slice(1, -1);
 

return newArray.concat(lastElement, middleElement, firstElement);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));     
console.log(rotateArray(['a', 'b', 'c']));          
//console.log(rotateArray(['a']));                   
//console.log(rotateArray([1, 'a', 3, 'c']));         
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    
//console.log(rotateArray([]));                       
