function callThreeTimes (callback) {
    for (let i = 0; i < 3; i++) {
      callback(i);
    }
  }
  
  function print(i) {
    console.log(`${i}번째 함수 호출`)
  }
  
  callThreeTimes(print);

  callThreeTimes(function (i) {
    console.log(`${i}번째 함수 호출`)
  })
  

  
  let arrays = [11, 3, 6, 12, 7];
  
  arrays.forEach(function (value, index, array) {
    console.log(`${index}번째 요소: ${value}`)
  })

  
  arrays = arrays.map(function (value, index, array) {
    return value * value;
  })
  
  arrays.forEach(console.log)
  

  const numberArray = [0, 1, 2, 3, 4, 5];
  
  const evenNumbers = numberArray.filter(function (value) {
    return value % 2 === 0
  })
  
  console.log(`원래 배열: ${numberArray}`);
  console.log(`짝수 값만을 담은 배열: ${evenNumbers}`);

  setTimeout(() => {
    console.log(`1 second has passed`);
  }, 1000)
  
  
  function makeGreeting(language) {
    return function(name) {
      if(language === 'en') {
        console.log('Hello, ' + name + '!');
      } else if (language === 'ko') {
        console.log('안녕하세요, ' + name + '!');
      }
    }
  }
  
  let greetingEnglish = makeGreeting('en');
  let greetingKorean = makeGreeting('ko');
  
  greetingEnglish('seungah');
  greetingKorean('승아');

  
  function makeCounter() {
    let counter = 0;
  
    return function() {
      return counter++;
    }
  }
  
  let count = makeCounter();
  
  console.log(count());
  console.log(count());
  console.log(count());
  

  
  function factorial(n) {
    if(n === 0) {
      return 1; 
    } else {
      return n * factorial(n - 1); 
    }
  }
  
  console.log(factorial(5)); 