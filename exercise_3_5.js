let array = [10, 15, 3, 7];
let k =  153

const checkSumNComplexity = (array, k) => {
    let alreadyChecked = new Set();
    // const complement;

    for(let i= 0; i < array.length; i++) {
        let complement = k - array[i];
        if(alreadyChecked.has(complement)){
            return true
        }
        alreadyChecked.add(array[i]);
    }
    return false;
}
console.log(checkSumNComplexity(array, k))