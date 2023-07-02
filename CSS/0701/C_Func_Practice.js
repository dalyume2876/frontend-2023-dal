function isLeapYear(year) {
    return  (year % 4 === 0) && (year % 100 !== 0) || (year % 400 == 0)
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`)
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`)

function sumAll(a,b){
    let output = 0;
    for(let i = a; i <= b; i++){
        output += i;
    }
    return output;
}

console.log(`1~100까지의 합: ${sumAll(1, 100)}`)
console.log(`1~10까지의 합: ${sumAll(1, 10)}`)

function min(arr) {
    let output = arr[0];
    for(const item of arr){
        if(output > item){
            output = item;
        }
    }
    return output;
}

const testArr = [52, 114, 242, 33, 21, 4343, 6974, 0]
console.log(`${testArr} 중에서`)
console.log(`최소값 : ${min(testArr)}`)