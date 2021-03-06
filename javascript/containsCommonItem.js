// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'c'];
const array2 = ['z', 'y', 'x', 'c'];

function containsCommonItems(array1, array2) {
  // // convert arrays to sets to remove duplicates
  // let array1Set = new Set(array1);
  // let array2Set = new Set(array2);
  //
  // // get total unique elements for each array and add them
  // let totalUniqueElementsInEachArray = new Set(array1).size + new Set(array2).size;
  //
  // // concatenate the arrays and convert the larger array to a set to remove duplicate numbers
  // let totalUniqueElementsInCombinedArray = new Set(array1.concat(array2)).size

  if ((new Set(array1).size + new Set(array2).size) > new Set(array1.concat(array2)).size) {
    return true;
  }
  else {
    return false;
  }
}

console.log(containsCommonItems(array1, array2));
