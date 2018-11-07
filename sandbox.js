const collections = [1,[2,[4,[5,[6]],3]]];
//console.log(collections[1]);
//console.log(collections[1][1]);

const array2 = [1,3,4,5,6,7];

//const criteriaFn = n=>n>5;
//const criteriaFn = n=>(typeof n === "number" && n > 5); 
const criteriaFn = n =>n >4;


function find(array, criteriaFn){
    // initialize two variables, `current`, and `next`
  // `current` keeps track of the element that we're
  // currently on, just like we did when unpacking the
  // array above; `next` is itself an array that keeps
  // track of the elements (which might be arrays!) that
  // we haven't looked at yet
  
  let current = array;
  let next = [];
  let newCurrent = [];
  
  // a `while` loop - this loop will only
  // trigger if `current` is truthy — so when
  // we exhaust `next` and, below, attempt to
  // `shift()` `undefined` (when `next` is empty)
  // onto `current`, we'll exit the loop
  
  while (current){
    
     // if `current` satisfies the `criteriaFn`, then
    // return it — recall that `return` will exit the
    // entire function!
    
    if (criteriaFn(current)){
    //fix: pushing results to new array to store all hits
    newCurrent.push(current);
    }
    
    if(Array.isArray(current)){
      for (let i = 0; i<current.length; i++){
        next.push(current[i]);
      }
    }
  current = next.shift();
}
  //return null;
 return newCurrent;
}