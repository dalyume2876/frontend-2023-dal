
function multiply (a, b) {
    return a * b;
  }
  
  console.log(multiply(2, 3)); // 6
  console.log(multiply(4, 5)); // 20
  

  function calculateDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
  
    return Math.sqrt(dx*dx + dy*dy);
  }
  
  console.log(calculateDistance(1, 2, 3, 4));

  
  document.querySelector('button').addEventListener('click', function() {
    console.log('Button was clicked!');
  });
  
  
  function greet() {
    console.log('Hello, World!');
  }
  

  
  let greet2 = function () {
    console.log('Hello, World!');
  };
  
 
  
  const greet3 = () => {
    console.log('Hello, World!');
  };
  
  
  greet();
  greet2();
  
  //* 예제1)
  function add(a, b) { 
    console.log(a + b);
  }
  
  add(3, 5);
  
  //* 예제2)
  function greeting(name) { 
    console.log(`Hello, ${name} !`);
  };
  
  greeting('Seungah'); 
  
  function log(a) {
    console.log(a);
  }
  
  log(); // undefined
  log(1); // 1
  log(0, 1, 2); // 0
  
  function subtraction(a, b) {
    return a - b;
  }
  
  let result = subtraction(10, 7); 
  console.log(result);
  
  function noReturnValue() {
    console.log("This function does not return anything");
  }
  
  let result2 = noReturnValue();
  

  function square(x) {
    return x * x;
  }
  
  let squareResult = square(5);
  console.log(squareResult);
  

  let myFunction = function() {
    console.log('This is an anonymous function!')
  }

  let myFunction2 = () => {
    console.log('This is an arrow function!');
  }
  
  let numbers = [1, 2, 3, 4, 5];
  let add2 = numbers.map(function(x) {
    return x + x;
  });
  
  console.log(add2);
  
  let add3 = numbers.map(x => x + x);
  
  console.log(add3);