// *********************************** LESS 21 **********************************************

// # 1 Decorator

const cachesDecorator = (func) => {

  const cache = {};

  return function (...args) {
    const key = args; 

    if (cache[key]) {
      return cache[key]; 
    }

    const result = func.apply(this, args); 

    cache[key] = result;

    return result;
  };
};

const obj = {
  num: 1,
  result: null,
  sum(num) {
    return this.num + num;
  },
};

const sum = function (num) {
  return this.num + num;
};

const decoratedSum = cachesDecorator(sum).bind(obj); 
console.log(decoratedSum(2)); 

const decoratedObjSum = cachesDecorator(obj.sum).bind(obj);
console.log(decoratedObjSum(11));


// ======================================================================================================

// #2 Factorial recursion

const factorial = (initialNumber) => {
 

  if (initialNumber === 0) {

    return 1;

  } else {

    return initialNumber * factorial(initialNumber - 1);
  }

};

const result = factorial(8);
console.log(result); 


// ======================================================================================================

// #3 Factorial recursion

const fib = (length) => {
  
  if (length < 2) {

    return length;

  } else {
  
    return fib(length - 1) + fib(length - 2);

  }

};


const fibRec = fib(5);
// 1 1 2 3 5
console.log(fibRec);

// ======================================================================================================

// #4 Read List

const list = {
  title: "lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

const readList = (list) => {
  
  if (list) {

    console.log(list.title);

    return readList(list.next);
  }

};

readList(list);
// lesson-1
// lesson-2
// lesson-3
// lesson-4
// lesson-5

// ======================================================================================================

// # 5 Deep Copy (optional)





// ======================================================================================================


// # 6

